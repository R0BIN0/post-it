using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TaskApi.Models
{
    public class TaskItem
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Color { get; set; }
    }
}