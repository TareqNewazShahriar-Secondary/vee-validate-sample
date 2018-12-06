using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace DotNetCoreApplicationWithDotNetFramework.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        [HttpPost]
        public IActionResult IsUniqueEmail(string email)
        {
            return Json(new { valid = false, message = "whatever you input, is not unique - okay?! But this message is from server, okay!!"});
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
