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
    [AuthorizeRoles]
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController:ControllerBase
    {
        private readonly ICarService _carService;
        private readonly IMapper _mapper;

        public CarsController(ICarService carService,IMapper mapper)
        {
            _carService = carService;
            _mapper = mapper;
        }
        //api/cars
        public async Task<IActionResult> GetCars()
        {
            var cars = await _carService.GetCarsAsync();
            var result=_mapper.Map<IEnumerable<CarForDTO>>(cars);
            return Ok(result);
        }
        //api/cars/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCar(int id)
        {
            var car = await _carService.GetCarIdAsync(id);
            var result= _mapper.Map<CarForDTO>(car);
            return Ok(result);
        }
        [HttpPost]
        public async Task<IActionResult> CreateCar(Car model)
        {
            var car=await _carService.SaveCarAsync(model);
            var result = _mapper.Map<CarForDTO>(car);
            return Ok(result);
//kkj
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCar(int id,CarForDTO model)
        {
            
            if(id!=model.Id)
            return BadRequest("Not valid request");

            if(!ModelState.IsValid)
            return BadRequest(ModelState);

            var car=_mapper.Map<Car>(model);
            await _carService.UpdateCarAsync(car);

            return Ok(model);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCarAsync(int id)
        {
           if(id==0)
            return BadRequest("Not valid request");

            if(!ModelState.IsValid)
            return BadRequest(ModelState);

            await _carService.DeleteCarAsync(id);
           
            return Ok();
        }


    }
}