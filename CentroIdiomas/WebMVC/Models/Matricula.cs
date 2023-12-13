using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebMVC.Models
{
    public class Matricula
    {
        [Key]
        [Display(Name = "Id matricula")]
        public int Id_matricula { get; set; }

        [Required(ErrorMessage ="Se requiere la fecha del curso")]
        [DataType(DataType.DateTime)]
        public DateTime Fecha { get; set;}

        [Required(ErrorMessage = "Se requiere el nivel de intensidad")]
        [StringLength(3,ErrorMessage ="Debe ser de 3 caracteres")]
        [Display(Name = "Nivel Intensidad")]
        public string Nivel_intensidad { get; set; }

        [Required(ErrorMessage ="Se requiere el costo")]
        [Column(TypeName ="Decimal(10,2)")]
        [Display(Name ="Costo")]
        public decimal Costo { get; set; }

        [Required(ErrorMessage ="Se necesita el estado de la factura")]
        public bool Cancelado { get; set; }

        [ForeignKey("Fk_estudiante")]
        [Display(Name ="Id estudiante")]
        public int Id_estudiante { get; set; }

        /*[Display(Name = "Datos del estudiante")]
        public Estudiante estudiante { get; set; }*/

        [ForeignKey("Fk_curso")]
        [Display(Name ="Id Curso")]
        public int Id_curso { get; set; }

        /*[Display(Name = "Datos del Curso")]
        public Curso curso { get; set; }*/

    }
}
