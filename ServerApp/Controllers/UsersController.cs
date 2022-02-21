using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ServerApp.Authorize;
using ServerApp.Data;
using ServerApp.Models;
using ServerApp.Models.DTO;
using ServerApp.Models.Enums;
using ServerApp.Services;

namespace ServerApp.Controllers
{
    [AuthorizeRoles]

    [Route("api/[controller]")]
    [ApiController]
    public class UsersController:ControllerBase
    {
       
        private readonly IMapper _mapper;
        private readonly IUserService _userService;

        public UsersController(IUserService userService,IMapper mapper)
        {

            _mapper = mapper;
            _userService = userService;
        }
        //api/users
        public async Task<IActionResult> GetUsers()
        {
            var users = await _userService.GetUsersAsync();
            var result=_mapper.Map<IEnumerable<UserForDTO>>(users);
            return Ok(result);
        }
        [HttpPost]
        public async Task<IActionResult> CreateUser(User model)
        {
            var user= await   _userService.SaveUserAsync(model);
            var result=_mapper.Map<UserForDTO>(user);
            return Ok(result);
            
        }
        //api/users/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _userService.GetUserIdAsync(id);
            var result =_mapper.Map<UserForDTO>(user);
            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, UserForDTO model)
        {
            if(id!=model.Id)
               return BadRequest("Not valid request");

            if(!ModelState.IsValid)
               return BadRequest(ModelState);

            var user = await _userService.GetUserIdAsync(id);
            _mapper.Map(model,user);
            
            return Ok();
               
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
           if(id==0)
               return BadRequest("Not valid request");

            if(!ModelState.IsValid)
               return BadRequest(ModelState);

            await _userService.DeleteUserAsync(id);
            
            return Ok();
        }
       
    }
}