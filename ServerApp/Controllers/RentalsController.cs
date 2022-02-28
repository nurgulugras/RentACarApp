using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ServerApp.Authorize;
using ServerApp.Models.DTO;
using ServerApp.Models.Entities;
using ServerApp.Services.Abstract;

namespace ServerApp.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class RentalsController:ControllerBase
    {
        private readonly IRentalService _rentalService;
        private readonly IMapper _mapper;

        public RentalsController(IRentalService rentalService,IMapper mapper)
        {
            _rentalService = rentalService;
            _mapper = mapper;
        }

        //api/rentals
        public async Task<IActionResult> GetRentals()
        {
            var rentals= await _rentalService.GetRentalsAsync();
            var result=_mapper.Map<IEnumerable<RentalForDTO>>(rentals);
            return Ok(result);
        }
        //api/rental/1
        [HttpGet("{id}")]
        public async Task<IActionResult> GetRental(int id)
        {
            var rental= await _rentalService.GetRentalIdAsync(id);
            var result=_mapper.Map<RentalForDTO>(rental);
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> EndTheRental(int id)
        {
            if(id==0)
            return BadRequest("Not valid request");

            if(!ModelState.IsValid)
            return BadRequest(ModelState);

            await _rentalService.DeleteRentalAsync(id);
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> CarRental(Rental model)
        {
            var rental= await _rentalService.SaveRentalAsync(model);
            var result=_mapper.Map<RentalForDTO>(rental);
            return Ok(result);

        }
    }
}