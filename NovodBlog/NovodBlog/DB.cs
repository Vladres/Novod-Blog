using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NovodBlog.Models
{
    public class DB : DbContext
    {
        public DbSet<Article> Articles { get; set; }
        public DbSet<Subscribers> Subscribers { get; set; }
        public DB(DbContextOptions<DB> options) 
            :base(options)
        {
            Database.EnsureCreated();
        }

    }
}
