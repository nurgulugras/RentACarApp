using AutoMapper;
using ServerApp.Models;
using ServerApp.Models.DTO;
using ServerApp.Models.Entities;

namespace ServerApp.Helpers
{
    public class MapperProfiles:Profile
    {
        public MapperProfiles()
        {
            CreateMap<User,UserForDTO>()
            .ForMember(dest=>dest.Age, opt=>opt.MapFrom(src => src.DateOfBirth.CalculateAge()));
            CreateMap<UserForDTO,User>();
            CreateMap<Car,CarForDTO>();
            CreateMap<CarForDTO,Car>();
            CreateMap<Rental,RentalForDTO>();
            CreateMap<RentalForDTO,Rental>();

        }
    }
}