using System.Collections.Generic;
using System.Threading.Tasks;
using ServerApp.Models;
using ServerApp.Models.DTO;

namespace ServerApp.Services
{
    public class UserService : IUserService
    {
        private readonly IRepository<User> _userRepository;

        public UserService(IRepository<User> userRepository)
        {
            _userRepository = userRepository;
        }
         public async Task<User> GetUserIdAsync(int id)
        {
            var user=await _userRepository.GetEntityByIdAsync(id);
            if(user==null)
                return null;
            if(user.IsSafeDeleted==true)
                return null;
            return user;
        
        }
        public Task<List<User>> GetUsersAsync()
        {
            return _userRepository.GetsAsync(x=>x.IsSafeDeleted==false);
        }
        public Task UpdateUserAsync(User user)
        {
           return _userRepository.UpdateAsync(user);
        }
        public async Task DeleteUserAsync(int id)
        {
           var dbUser= await _userRepository.GetEntityByIdAsync(id);
           dbUser.IsSafeDeleted=true;
           await _userRepository.UpdateAsync(dbUser);
        }
        public Task<User> SaveUserAsync(User user)
        {
           return _userRepository.SaveAsync(user);
        }
        public async Task<List<User>> GetActivesUsersAsync()
        {
            return await _userRepository.GetsAsync(x=>x.IsActive==true && x.IsSafeDeleted==false);
        }
        public async Task<List<User>> GetPassivesUsersAsync()
        {
            return await _userRepository.GetsAsync(x=>x.IsActive==false && x.IsSafeDeleted==false);
        }
    }
}