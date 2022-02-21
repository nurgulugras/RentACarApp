using System.ComponentModel.DataAnnotations;

namespace ServerApp.Models.DTO
{
    public class UserForLoginDTO
    {
        [Required]
        public string Email { get; set; }
        
        [Required]
        public string Password { get; set; }
    }
}