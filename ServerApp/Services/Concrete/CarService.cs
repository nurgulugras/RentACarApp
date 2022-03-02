using System.Collections.Generic;
using System.Threading.Tasks;
using ServerApp.Models.Entities;
using ServerApp.Services.Abstract;

namespace ServerApp.Services.Concrete
{
    public class CarService : ICarService
    {
        private readonly IRepository<Car> _carRepository;

        public CarService(IRepository<Car> carRepository)
        {
            _carRepository = carRepository;
        }
        public async Task<Car> GetCarIdAsync(int id)
        {
            var car= await _carRepository.GetEntityByIdAsync(id);
            if(car==null)
            return null;
            if(car.IsSafeDeleted==true)
            return null;
            return car;
        }
        public Task<List<Car>> GetCarsAsync()
        {
            return _carRepository.GetsAsync(x=>x.IsSafeDeleted==false);
        }
        public Task UpdateCarAsync(Car car)
        {
            return _carRepository.UpdateAsync(car);
        }
         public async Task DeleteCarAsync(int id)
        {
            var dbCar= await _carRepository.GetEntityByIdAsync(id);
            dbCar.IsSafeDeleted=true;
            await _carRepository.UpdateAsync(dbCar);
        }
        public Task<Car> SaveCarAsync(Car car)
        {   car.IsActive=true;
            return _carRepository.SaveAsync(car);
        }
        public async Task<List<Car>> GetActivesUsersAsync()
        {
            return await _carRepository.GetsAsync(x=>x.IsActive==true && x.IsSafeDeleted==false);
        }
        public async Task<List<Car>> GetPassivesUsersAsync()
        {
            return await _carRepository.GetsAsync(x=>x.IsActive==false && x.IsSafeDeleted==false);
        }

      
    }
}