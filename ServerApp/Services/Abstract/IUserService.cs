using System.Collections.Generic;
using System.Threading.Tasks;
using ServerApp.Models;
using ServerApp.Models.DTO;

namespace ServerApp.Services
{
    public interface IUserService
    {
        Task<User> GetUserIdAsync(int id);
        Task<List<User>> GetUsersAsync();
        Task<User> SaveUserAsync(User user);
        Task UpdateUserAsync(User user);
        Task DeleteUserAsync(int id);
    }
}