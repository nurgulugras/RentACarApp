using System;

namespace ServerApp.Models.Entities
{
    public class Rental:IEntity
    {
        public int Id { get; set; }
        public DateTime RentDate { get; set; }
        public DateTime RentEndDate { get; set; }
        public string Images { get; set; }
        public int UserId{ get ; set; }
        public User User{get; set;}
        public int CarId { get; set; }
        public Car Car { get; set; }
        public bool isActive { get; set; }
        public bool IsSafeDeleted { get; set; }
    }
}