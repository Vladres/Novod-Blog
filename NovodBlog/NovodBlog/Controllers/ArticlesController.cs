using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NovodBlog.Models;
using NovodBlog.Services;

namespace NovodBlog.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticlesController : ControllerBase
    {
        private readonly DB _db;
        private readonly EmailService _em;
        public ArticlesController(DB context,EmailService emailService)
        {
            _db = context;
            _em = emailService;
        }

        #region GET: api/Articles
        //GET: api/Articles
        [HttpGet("")]
        public IEnumerable<Article> Get()
        {
            return _db.Articles.ToList();
        }

        #endregion

        #region GET: api/Articles/{id}
        // GET: api/Articles/5
        [HttpGet("{id}")]
        public Article Get(int id)
        {
            Article article = _db.Articles.FirstOrDefault(x => x.id == id);
            return article;
        }

        #endregion

        #region POST: api/Articles
        // POST: api/Articles
        [HttpPost("")]
        public async Task<IActionResult> Post([FromBody] Article value)
        {
            if (ModelState.IsValid)
            {
                _db.Articles.Add(value);
                _db.SaveChanges();
                await _em.SendMessages(_db);
                return Ok(value);
            }
            return BadRequest(ModelState);
        }
        #endregion

        # region PUT: api/Articles/ 
        // PUT: api/Articles/   
        [HttpPut("")]
        public IActionResult Put([FromBody] Article value)
        {
            if (ModelState.IsValid)
            {
                _db.Update(value);
                _db.SaveChanges();
                return Ok(value);
            }
            return BadRequest(ModelState);
        }
        #endregion

        #region DELETE: api/Articles/{id}
        // DELETE: api/Articles/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Article product = _db.Articles.FirstOrDefault(x => x.id == id);
            if (product != null)
            {
                _db.Articles.Remove(product);
                _db.SaveChanges();
            }
            return Ok(product);
        }

        #endregion

        
    }
}
