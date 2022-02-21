using System.ComponentModel.DataAnnotations;
using ServerApp.Models.Entities;

namespace ServerApp.Models.DTO
{
    public class CarForDTO
    {
        public int Id { get; set; }
        [Required]
        public string Brand { get; set; }
        public string Model { get; set; }
        public string ModelYear { get; set; }
        public string LicenceType { get; set; }
        public int Price { get; set; }
        public string ImageUrl { get; set; }
    }
}