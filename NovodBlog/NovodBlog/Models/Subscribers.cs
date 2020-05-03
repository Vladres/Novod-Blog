using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace NovodBlog.Models
{
    [Table("Subscribers")]
    public class Subscribers
    {
        [Key]
        public int id_subscriber { get; set; }
        public string email { get; set; }
        public string name_of_subscriber { get; set; }

    }
}
