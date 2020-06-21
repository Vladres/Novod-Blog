using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MimeKit;
using MailKit.Net.Smtp;
using NovodBlog.Models;

namespace NovodBlog.Services
{
    public class EmailService
    {
        private async Task SendEmailAsync(string email, string subject, string message)
        {
            var emailMessage = new MimeMessage();

            emailMessage.From.Add(new MailboxAddress("Администрация сайта" , "novodblog@gmail.com"));
            emailMessage.To.Add(new MailboxAddress("", email));
            emailMessage.Subject = subject;
            emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html)
            {
                Text = message
            };

            using (var client = new SmtpClient())
            {
                await client.ConnectAsync("smtp.gmail.com", 465,true);
                await client.AuthenticateAsync("novodblog@gmail.com", "vladres1121");
                await client.SendAsync(emailMessage);
                await client.DisconnectAsync(true);
            }
        }

        public async Task SendMessages(DB _db) // send message by gmail to client
        {
            List<Subscribers> emailList = _db.Subscribers.Distinct().ToList();
            foreach (Subscribers tmp in emailList)
            {
                await this.SendEmailAsync(tmp.email, "Novod blog News", $"<div>{tmp.name_of_subscriber}<br>Зайди на сайт там новинки<div>").ConfigureAwait(true);
            }
        }

    }
}
