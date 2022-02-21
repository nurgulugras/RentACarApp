using System;
using ServerApp.Models.Entities;

namespace ServerApp.Models.DTO
{
    public class RentalForDTO
    {
        public int Id { get; set; }
        public string BrandName { get; set; }
        public string CustomerName { get; set; }
        public DateTime RentDate { get; set; }
        public DateTime RentEndDate { get; set; }
        public string Images { get; set; }
        public bool isActive { get; set; }
    }
}