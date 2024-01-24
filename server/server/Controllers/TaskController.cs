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
            var filter = Builders<TaskItem>.Filter.Empty;
            var taskItems = await _context.Tasks.Find(filter).ToListAsync();
            return taskItems;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TaskItem>> GetTask(string id)
        {
            var taskItem = await _context.Tasks.Find(t => t.Id == id).FirstOrDefaultAsync();
            if (taskItem == null)
            {
                return NotFound();
            }
            return taskItem;
        }

        [HttpPost]
        [Produces("application/json")]
        [ProducesResponseType(typeof(void), StatusCodes.Status403Forbidden)]
        public async Task<IActionResult> CreateTaskAsync([FromBody] TaskItemDTO taskDTO)
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
    }
}