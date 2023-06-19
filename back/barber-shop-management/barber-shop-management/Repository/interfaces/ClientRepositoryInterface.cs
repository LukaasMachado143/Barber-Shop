using barber_shop_management.Models;

namespace barber_shop_management.Repository.interfaces
{
    public interface IClientRepository
    {
        void AddClient(ClientModel client);
        void UpdateDataClient(ClientModel client);
        void DeleteClient(ClientModel client);
        List<ClientModel> GetAllClient();



    }
}
