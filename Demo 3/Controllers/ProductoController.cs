using Microsoft.AspNet.Mvc;
using System.Collections.Generic;
using Demo3.Models;


namespace Demo3.Controllers
{
    public class ProductoController: Controller
    {
        [Route("api/[Controller]")]
        public IEnumerable<Producto> Get(){
            return new List<Producto>(){
                new Producto(){
                    Id = 1,
                    Nombre = "Huevos"
                },
                new Producto(){
                    Id = 2,
                    Nombre = "Manzanas"
                },
                new Producto(){
                    Id = 3,
                    Nombre = "Plátanos"
                },
                new Producto(){
                    Id = 4,
                    Nombre = "Mostaza"
                },
                new Producto(){
                    Id = 5,
                    Nombre = "Queso"
                }
            };     
        }
        
    }
}