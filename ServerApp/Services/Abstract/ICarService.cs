using System.Collections.Generic;
using System.Threading.Tasks;
using ServerApp.Models.Entities;

namespace ServerApp.Services.Abstract
{
    public interface ICarService
    {
        Task<Car> GetCarIdAsync(int id);
        Task<List<Car>> GetCarsAsync();
        Task<Car> SaveCarAsync(Car car);
        Task UpdateCarAsync(Car car);
        Task DeleteCarAsync(int id);
    }
}