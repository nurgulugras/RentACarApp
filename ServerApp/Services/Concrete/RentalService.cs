using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ServerApp.Models;
using ServerApp.Models.Entities;
using ServerApp.Services.Abstract;

namespace ServerApp.Services.Concrete
{
    public class RentalService : IRentalService
    {
        private readonly IRepository<Rental> _rentalRepository;

        public RentalService(IRepository<Rental> rentalRepository)
        {
            _rentalRepository = rentalRepository;
        }
        public async Task DeleteRentalAsync(int id)
        {
            var dbRent= await _rentalRepository.GetEntityByIdAsync(id);
            dbRent.IsSafeDeleted=true;
            await _rentalRepository.UpdateAsync(dbRent);
        }

        public async Task<List<Rental>> GetRentalsAsync()
        {
           var query = await _rentalRepository.GetsAsync2(x=>x.IsSafeDeleted==false);

           query.Include(x=> x.Car);
           query.Include(x=> x.User);

           return query.ToList();
        }

        public Task<Rental> SaveRentalAsync(Rental rental)
        {
            rental.isActive=true;
           return _rentalRepository.SaveAsync(rental);
        }

        public async Task<Rental> GetRentalIdAsync(int id)
        {
            var rental= await _rentalRepository.GetEntityByIdAsync(id);
            if(rental==null)
            return null;
            if(rental.IsSafeDeleted==true)
            return null;
            return rental;

        }

        public async Task<List<Rental>> GetRentActivesAsync()
        {
            return await _rentalRepository.GetsAsync(x=>x.isActive==true && x.IsSafeDeleted==false);
        }

        public async Task<List<Rental>> GetRentPassivesAsync()
        {
            return await _rentalRepository.GetsAsync(x=>x.isActive==false && x.IsSafeDeleted==false);
        }

     
    }
}