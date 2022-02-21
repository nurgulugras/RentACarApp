using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ServerApp.Models;
using ServerApp.Models.Entities;

namespace ServerApp.Data
{
    public class DataContext: IdentityDbContext<User,Role,int>
    {
        public DataContext(DbContextOptions<DataContext>options):base(options)
        {
        }

        public DbSet<Car> Cars { get; set; }
        public DbSet<Rental> Rentals { get; set; }

    }
}