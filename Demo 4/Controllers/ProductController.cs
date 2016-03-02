using Microsoft.AspNet.Mvc;
using System.Collections.Generic;
using Demo4.Models;

namespace Demo4.Controllers
{
    public class ProductController: Controller
    {
        [Route("api/[Controller]")]
        public IEnumerable<Product> Get()
        {
            return new List<Product>(){
                new Product(){
                    ProductId = 1,
                    Name = "Coca cola"
                },
                new Product(){
                    ProductId=2,
                    Name = "Fanta"
                },
                new Product(){
                    ProductId=3,
                    Name = "Patatas"
                }
            };
        }
    }
}
