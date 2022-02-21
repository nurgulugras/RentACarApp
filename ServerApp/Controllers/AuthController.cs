using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using ServerApp.Models.DTO;
using ServerApp.Models;
using ServerApp.Models.Enums;

namespace ServerApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]//api/user
   
    public class AuthController:ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IConfiguration _configuration;

        public AuthController(UserManager<User> userManager,SignInManager<User> signInManager,IConfiguration configuration)
        {
            _userManager=userManager;
            _signInManager = signInManager;
            _configuration = configuration;
        }
       
        [HttpPost("register")]//api/user/register
        public async Task<IActionResult> Register([FromBody] UserForRegisterDTO model)
        {
           var user = new User{
             UserName=model.UserName,
             Email=model.Email,
             Name=model.Name,
             Gender=model.Gender,
           };
           

           var result=await _userManager.CreateAsync(user,model.Password);
           if(result.Succeeded)
           {
               return StatusCode(201);
           }
           return BadRequest(result.Errors);

        }
        [HttpPost("login")]//api/user/login
        public async Task<IActionResult> Login(UserForLoginDTO model)
        {
         var user= await _userManager.FindByEmailAsync(model.Email);

         if(user== null)
             return BadRequest(new {message="username is incorrect"});

         var result = await _signInManager.CheckPasswordSignInAsync(user,model.Password,false); //dogru ise login edicez//false hatali giriste kitlenme durumu.
         if(result.Succeeded)       
         {
             //login
             return Ok(new {
                 token=GenerateJwtToken(user)
             });
         }            
         return Unauthorized();                                                                               
        }
        private string GenerateJwtToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key=Encoding.ASCII.GetBytes(_configuration.GetSection("AppSettings:Secret").Value);
            int role = (int) user.Role;
            var tokenDescriptor=new SecurityTokenDescriptor
            {
               Subject=new ClaimsIdentity(new Claim[]{
                   new Claim(ClaimTypes.NameIdentifier,user.Id.ToString()),
                   new Claim(ClaimTypes.Email,user.UserName),
                   new Claim(ClaimTypes.Role,role.ToString()),
               }),
               Expires=DateTime.UtcNow.AddDays(1),//1 gun boyunca gecerli token
               SigningCredentials=new SigningCredentials(new SymmetricSecurityKey(key),SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}