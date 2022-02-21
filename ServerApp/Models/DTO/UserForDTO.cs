using System;
using ServerApp.Models.Enums;

namespace ServerApp.Models.DTO
{
    public class UserForDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public int Age { get; set; }
        public string LicenceType { get; set; }
        public DateTime LicenceDate { get; set; }
        public RoleEnum Role { get; set; }
    }
}