using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using ServerApp.Data;
using ServerApp.Models;
using ServerApp.Services;
using ServerApp.Services.Abstract;
using ServerApp.Services.Concrete;

namespace ServerApp
{
    public class Startup
    {
        
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        readonly string MyAllowOrigins = "_myAllowOrigins";
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<DataContext>(x=>x.UseSqlite("Data Source=rent.db"));
            services.AddIdentity<User,Role>().AddEntityFrameworkStores<DataContext>().AddRoles<Role>();

            services.AddScoped<IUserService, UserService>();
            services.AddScoped<ICarService,CarService>();
            services.AddScoped<IRentalService,RentalService>();
            services.AddScoped(typeof(IRepository<>),typeof(EFRepository<>));
            services.Configure<IdentityOptions>(options=> {

               options.Password.RequireDigit = true;
               options.Password.RequireLowercase = true;
               options.Password.RequireUppercase = true;
               options.Password.RequireNonAlphanumeric = true;
               options.Password.RequiredLength = 6;

               options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
               options.Lockout.MaxFailedAccessAttempts = 5;
               options.Lockout.AllowedForNewUsers = true;

               options.User.AllowedUserNameCharacters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+";
               options.User.RequireUniqueEmail = true; 
            });
            services.AddAutoMapper(typeof(Startup));
            services.AddControllers().AddNewtonsoftJson();
            services.AddCors(options => {
                options.AddPolicy(
                    name: MyAllowOrigins,
                    builder => {
                        builder
                            .WithOrigins("http://localhost:4200")
                            .AllowAnyHeader()
                            .AllowAnyMethod();
                    });
            });
            services.AddAuthentication(x=>{
                x.DefaultAuthenticateScheme=JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme=JwtBearerDefaults.AuthenticationScheme;

            })
            .AddJwtBearer(x=>{
              x.RequireHttpsMetadata=false;
              x.SaveToken=true;
              x.TokenValidationParameters=new TokenValidationParameters{
                  ValidateIssuerSigningKey=true,
                  IssuerSigningKey=new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Configuration.GetSection("AppSettings:Secret").Value)),
                  ValidateIssuer=false,
                  ValidateAudience=false
              };
            });
        }
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(MyAllowOrigins);

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}