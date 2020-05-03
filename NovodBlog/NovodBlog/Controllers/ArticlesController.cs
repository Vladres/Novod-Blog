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

        Models.DB db;

        public ArticlesController(DB context)
        {
            db = context;
            
        }

        // GET: api/Articles
        [HttpGet]
        public IEnumerable<Article> Get()
        {
            return db.Articles.ToList();
        }

        // GET: api/Articles/5
        [HttpGet("{id}")]
        public Article Get(int id)
        {
            Article article = db.Articles.FirstOrDefault(x => x.id == id);
            return article;
        }

        // POST: api/Articles
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Article value)
        {
            if (ModelState.IsValid)
            {
                db.Articles.Add(value);
                db.SaveChanges();
                await SendMessage();
                return Ok(value);
            }
            return BadRequest(ModelState);
        }

        // PUT: api/Articles/   
        [HttpPut]
        public IActionResult Put([FromBody] Article value)
        {
            if (ModelState.IsValid)
            {
                db.Update(value);
                db.SaveChanges();
                return Ok(value);
            }
            return BadRequest(ModelState);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Article product = db.Articles.FirstOrDefault(x => x.id == id);
            if (product != null)
            {
                db.Articles.Remove(product);
                db.SaveChanges();
            }
            return Ok(product);
        }


        public async Task<IActionResult> SendMessage()
        {
            EmailService emailService = new EmailService();
            List<Subscribers> emailList = db.Subscribers.ToList();
            foreach (Subscribers tmp in emailList)
            {
                await emailService.SendEmailAsync(tmp.email , "Тема письма", tmp.name_of_subscriber + "Зайди на сайт там новинки");

            }
            return RedirectToAction("Index");
        }
    }
}
