namespace barber_shop_management.Models
{
    public class ClientModel
    {

        public Guid Id { get; set; }
        public string name { get; set; }
        public string birthDate { get; set; }
        public string? cpf { get; set; }
        public string rg { get; set; }
        public string? address { get; set; }
        public string phoneNumber { get; set; }
        public ClientModel(Guid id, string name, string birthDate, string? cpf, string rg, string? address, string phoneNumber)
        {
            Id = id;
            this.name = name;
            this.birthDate = birthDate;
            this.cpf = cpf;
            this.rg = rg;
            this.address = address;
            this.phoneNumber = phoneNumber;
        }

    }
}
