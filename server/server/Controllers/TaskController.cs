using MongoDB.Driver;
using TaskApi.Models;
using TaskApi.Data;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace TaskApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TasksController : ControllerBase
    {
        private readonly TaskContext _context;

        public TasksController(TaskContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<List<TaskItem>>> GetAllTasks()
        {
            try
            {
                var filter = Builders<TaskItem>.Filter.Empty;
                var taskItems = await _context.Tasks.Find(filter).ToListAsync();
                return taskItems;
            }
            catch (MongoException ex)
            {
                return StatusCode(500, new { Error = "Impossible d'établir la connexion avec la Base de données." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Error = "Une erreur inattendue s'est produite." });
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TaskItem>> GetTask(string id)
        {
            try
            {
                var taskItem = await _context.Tasks.Find(t => t.Id == id).FirstOrDefaultAsync();
                if (taskItem == null)
                {
                    return NotFound(new { Error = "Tâche non trouvée." });
                }
                return taskItem;
            }
            catch (MongoException ex)
            {
                return StatusCode(500, new { Error = "Impossible d'établir la connexion avec la Base de données." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Error = "Une erreur inattendue s'est produite." });
            }
        }

        [HttpPost]
        [Produces("application/json")]
        [ProducesResponseType(typeof(void), StatusCodes.Status403Forbidden)]
        public async Task<IActionResult> CreateTaskAsync([FromBody] TaskItemDTO taskDTO)
        {
            try
            {
                var taskItem = new TaskItem
                {
                    Title = taskDTO.Title,
                    Description = taskDTO.Description,
                    Color = taskDTO.Color
                };

                await _context.Tasks.InsertOneAsync(taskItem);
                return CreatedAtAction(nameof(GetTask), new { id = taskItem.Id }, taskItem);
            }
            catch (MongoException ex)
            {
                return StatusCode(500, new { Error = "Impossible d'établir la connexion avec la Base de données." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Error = "Une erreur inattendue s'est produite." });
            }
        }

        [HttpPut("{id}")]
        [Produces("application/json")]
        [ProducesResponseType(typeof(void), StatusCodes.Status404NotFound)]
        [ProducesResponseType(typeof(void), StatusCodes.Status403Forbidden)]
        public async Task<IActionResult> UpdateTaskAsync([FromRoute] string id, [FromBody] TaskItem task)
        {
            try
            {
                var filter = Builders<TaskItem>.Filter.Eq(t => t.Id, id);
                var update = Builders<TaskItem>.Update
                    .Set(t => t.Title, task.Title)
                    .Set(t => t.Description, task.Description)
                    .Set(t => t.Color, task.Color);

                var result = await _context.Tasks.UpdateOneAsync(filter, update);

                if (result.MatchedCount == 0)
                {
                    return NotFound(new { Error = "Tâche non trouvée." });
                }

                return Ok();
            }
            catch (MongoException ex)
            {
                return StatusCode(500, new { Error = "Impossible d'établir la connexion avec la Base de données." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Error = "Une erreur inattendue s'est produite." });
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<TaskItem>> DeleteTaskAsync([FromRoute] string id)
        {
            try
            {
                var filter = Builders<TaskItem>.Filter.Eq(item => item.Id, id);
                var result = await _context.Tasks.DeleteOneAsync(filter);
                if (result.DeletedCount == 0)
                {
                    return NotFound(new { Error = "Tâche non trouvée." });
                }
                return Ok();
            }
            catch (MongoException ex)
            {
                return StatusCode(500, new { Error = "Impossible d'établir la connexion avec la Base de données." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Error = "Une erreur inattendue s'est produite." });
            }
        }
    }
}