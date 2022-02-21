namespace ServerApp.Models.Entities
{
    public class Car:IEntity
    {
        public int Id { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public string ModelYear { get; set; }
        public string LicenceType { get; set; }
        public int Price { get; set; }
        public string ImageUrl { get; set; }
        public bool IsSafeDeleted { get; set; }
        public bool IsActive  { get; set; }
        public Rental Rental {get; set;}
    }
}