

/* -------------------
        Clase
    ------------------
*/

/* Prototipo Padre : Equipo de Baloncesto*/
class Baloncesto 
    {
        //constructor dentro de la clase Baloncesto
            constructor (base, escolta, alero, ala_pivot, pivot)
                {
                    this.base = base;
                    this.escolta = escolta;
                    this.alero= alero; 
                    this.ala_pivot = ala_pivot;
                    this.pivot = pivot; 
                }
                
        /* 
            Metodos dentro de la clase Baloncesto. Los metodos son funciones metidas dentro de los objetos(en este caso dentro de una 
        "clase")
        */
            plantilla_titulares()
                {
                    console.log(`Jugadores ${this.base} ${this.Pivot}`) ;
                }        


    }



//Instancias del constructor ( Instanciar de Persona)

var lakers = new Baloncesto ("stephen curry", "Kobe Bryant", "Michael Jordan", "Lebron James", "Shaquille O_neal");
var Suplentes_lakers = new Baloncesto ("Chris Paul", "Allen Iverson", "Luka Donic", "Blake Griffin", "Tim Duncan" );


// llamada de "instancia - Lakers" . "metodo del padre-plantilla"
lakers.plantilla();













