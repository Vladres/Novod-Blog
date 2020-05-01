using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
    
namespace NovodBlog.Models
{
    [Table("Articles")]
    public class Article
    {
        public int id { get; set; }
        public string Title { get; set; }
        public string subText { get; set; }
        public string Text { get; set; } 
        public string imgSource { get; set; }
    }
}
