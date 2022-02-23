using System;
using Microsoft.AspNetCore.Identity;
using ServerApp.Models.Entities;
using ServerApp.Models.Enums;

namespace ServerApp.Models
{
    public class User:IdentityUser<int>, IEntity//<int>//id int gelir.
    {
        public string Name { get; set; }
        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int Age { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Phone_No { get; set; }
        public string Address { get; set; }
        public string Images  { get; set; }
        public string LicenceType { get; set;}
        public DateTime LicenceDate { get; set; }
        public Boolean IsSafeDeleted { get; set; }
        public Boolean IsActive { get ; set; } 
        public RoleEnum Role { get ; set; } 
        public Rental Rental {get; set;}
    }
}