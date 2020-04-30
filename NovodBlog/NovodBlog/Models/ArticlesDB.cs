using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NovodBlog.Models
{
    public class ArticlesDB : DbContext
    {
        public DbSet<Article> Articles { get; set; }
        public ArticlesDB(DbContextOptions<ArticlesDB> options) 
            :base(options)
        {
            Database.EnsureCreated();
        }

    }
}
