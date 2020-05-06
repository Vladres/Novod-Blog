using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NovodBlog.Models;

namespace NovodBlog.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscribersController : ControllerBase
    {
        private readonly DB _context;

        public SubscribersController(DB context)
        {
            _context = context;
        }

        // GET: api/Subscribers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Subscribers>>> GetSubscribers()
        {
            return await _context.Subscribers.ToListAsync();
        }

        // GET: api/Subscribers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Subscribers>> GetSubscribers(int id)
        {
            var subscribers = await _context.Subscribers.FindAsync(id);

            if (subscribers == null)
            {
                return NotFound();
            }

            return subscribers;
        }

        // PUT: api/Subscribers/5
        
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSubscribers(int id, Subscribers subscribers)
        {
            if (id != subscribers.id_subscriber)
            {
                return BadRequest();
            }

            _context.Entry(subscribers).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SubscribersExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Subscribers
        
        [HttpPost]
        public async Task<ActionResult<Subscribers>> PostSubscribers(Subscribers subscribers)
        {
            _context.Subscribers.Add(subscribers);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSubscribers", new { id = subscribers.id_subscriber }, subscribers);
        }

        // DELETE: api/Subscribers/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Subscribers>> DeleteSubscribers(int id)
        {
            var subscribers = await _context.Subscribers.FindAsync(id);
            if (subscribers == null)
            {
                return NotFound();
            }

            _context.Subscribers.Remove(subscribers);
            await _context.SaveChangesAsync();

            return subscribers;
        }

        private bool SubscribersExists(int id)
        {
            return _context.Subscribers.Any(e => e.id_subscriber == id);
        }
    }
}
