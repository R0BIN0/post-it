using MongoDB.Driver;
using TaskApi.Models;

namespace TaskApi.Data
{
    public class TaskContext
    {
        private readonly IMongoDatabase _database;

        public TaskContext(IConfiguration configuration)
        {
            var client = new MongoClient(configuration["MongoDB:ConnectionString"]);
            _database = client.GetDatabase(configuration["MongoDB:DatabaseName"]);
        }

        public IMongoCollection<TaskItem> Tasks => _database.GetCollection<TaskItem>("Tasks");

    }
}