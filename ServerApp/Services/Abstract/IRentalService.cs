using System.Collections.Generic;
using System.Threading.Tasks;
using ServerApp.Models.Entities;

namespace ServerApp.Services.Abstract
{
    public interface IRentalService
    {
        Task<Rental> GetRentalIdAsync(int id);
        Task<List<Rental>> GetRentalsAsync();
        Task<List<Rental>> GetRentActivesAsync();
        Task<List<Rental>> GetRentPassivesAsync();
        Task<Rental> SaveRentalAsync(Rental rental);
        Task DeleteRentalAsync(int id);
    }
}