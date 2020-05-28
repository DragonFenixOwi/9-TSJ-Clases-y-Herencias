/*
    -------------------------------------------------------------------------------------------------
        Autor: Osvaldo Aquino
        nickname: owi
        Descripción : 
            - Inventar un tipo de clase padre, que luego herede de dos tipos de clase hijo.
            - Con un mínimo de dos métodos para las clase hijos.

        Desarrollo : 
            - Clase padre = Baloncesto
                    - Metodo = plantilla_titulares
            - Clase hijo 1 = Resto_de_Plantilla 
                    - Metodo 1 = plantilla_suplentes
                    - Metodo 2 =plantilla_suplentes_entrenador
            - Clase hijo 2 =  Lesionados
                    - Metodo 1 = plantilla_lesionados
                    - Metodo 2 =plantilla_lesionados_asistente
            --------------------------------------------------------------------------------------------------
*/



/* -------------------
        Clase
    ------------------
*/

/* Prototipo Padre : Baloncesto*/
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
            Metodos dentro de la clase Baloncesto. Los metodos son funciones metidas dentro de los objetos
            (en este caso dentro de una "clase")
        */
            plantilla_titulares()
                {
                    // Visualización del resultado final en navegador 
                        document.write(` # (Padre) Los jugadores titulares son: <br> - ${this.base} <br> - ${this.escolta}<br>
                        - ${this.alero} <br> - ${this.ala_pivot}<br> - ${this.pivot}<br>`);
                    
                    // Visualización del resultado final en consola
                        console.log(` # (Padre) Los jugadores titulares son: \n \t- ${this.base} \n \t- ${this.escolta} \n \t- ${this.alero} \n \t- ${this.ala_pivot} \n \t- ${this.pivot}`);
                }        


    }





/* -------------------
        Herencia
    ------------------
*/

/* 
    Herencia"
        - Creamos una herencia llamada "Resto_de_Plantilla"
        - ¿Como hago que "Resto_de_Plantilla" herede algo de la clase "Baloncesto"?
            - Pues con un "extendes".  "Extiendo esa información de 'Baloncesto'.
        
        - Entonces:  
            la clase "Resto_de_Plantilla", tiene como padre tiene como padre de esa herencia a "Baloncesto"
        
        -Necesitamos que "Resto_de_Plantilla" sea un "class" para utilizar "extends"

*/


/*
    --------------------------
        Hijo 1
    --------------------------
*/


class Resto_de_Plantilla extends Baloncesto
    {
         //constructor       
         constructor (base, escolta, alero, ala_pivot, pivot, entrenador ="Steve Kerr")  // aqui es donde elegimos como pedirla
            {
                //Aqui no puedo utilizar "this.base, this.escolta" porque no son mios. Pertenecen a "Baloncesto"
                //Debo llamar al Super Constructor (que es como llamar al padre)
                    super (base, escolta, alero, ala_pivot, pivot);
                    this.entrenador = entrenador;
            }

        // Metodo 1 para la clase hijo 1 
            plantilla_suplentes()
            {
                // Visualización del resultado final en navegador 
                    document.write(`<br> # (Hijo 1 - Metodo 1) Los jugadores suplentes son: <br> - ${this.base} <br> - ${this.escolta}<br>
                    - ${this.alero} <br> - ${this.ala_pivot}<br> - ${this.pivot}<br>- ${this.pivot}<br>`);
                
                // Visualización del resultado final en consola
                    console.log(`# (Hijo 1 - Metodo 1) Los jugadores suplentes son: \n \t- ${this.base} \n \t- ${this.escolta} \n \t- ${this.alero} \n \t- ${this.ala_pivot} \n \t- ${this.pivot}`);
            }        


            // Metodo 2 para la clase hijo 1 
                plantilla_suplentes_entrenador()
                {
                    // Visualización del resultado final en navegador 
                        document.write(`<br> # (Hijo 1 - Metodo 2) Los suplentes son : <br> - ${this.base} <br> - ${this.escolta}<br>
                        - ${this.alero} <br> - ${this.ala_pivot}<br> - ${this.pivot}<br> # Y el entrenador es:<br> - ${this.entrenador}<br>`);
                    
                    // Visualización del resultado final en consola
                        console.log(`# (Hijo 1 - Metodo 2) Los suplentes son: \n \t- ${this.base} \n \t- ${this.escolta} \n \t- ${this.alero} \n \t- ${this.ala_pivot} \n \t- ${this.pivot} \n # Y el entrenador es: \n \t- ${this.entrenador}`);
                }    

            
    }



/*
    --------------------------
        Hijo 2
    --------------------------
*/


class Lesionados extends Baloncesto
    {
         //constructor       
         constructor (base, escolta, alero, ala_pivot, pivot, asistente ="Phil Jackson")  // aqui es donde elegimos como pedirla
            {
                //Aqui no puedo utilizar "this.base, this.escolta" porque no son mios. Pertenecen a "Baloncesto"
                //Debo llamar al Super Constructor (que es como llamar al padre)
                    super (base, escolta, alero, ala_pivot, pivot);
                    this.asistente = asistente;
            }

        // Metodo 1 para la clase hijo 2
            plantilla_lesionados()
                {
                    // Visualización del resultado final en navegador 
                        document.write(`<br> # (Hijo 2 - Metodo 1) Los jugadores Lesionados son: <br> - ${this.base} <br> - ${this.escolta}<br>
                        - ${this.alero} <br> - ${this.ala_pivot}<br> - ${this.pivot}<br>- ${this.pivot}<br>`);
                    
                    // Visualización del resultado final en consola
                        console.log(`# (Hijo 2 - Metodo 1) Los jugadores Lesionados son: \n \t- ${this.base} \n \t- ${this.escolta} \n \t- ${this.alero} \n \t- ${this.ala_pivot} \n \t- ${this.pivot}`);
                }        


            // Metodo 2 para la clase hijo 2
                plantilla_lesionados_asistente()
                {
                    // Visualización del resultado final en navegador 
                        document.write(`<br> # (Hijo 2 - Metodo 2) Los Lesionados son : <br> - ${this.base} <br> - ${this.escolta}<br>
                        - ${this.alero} <br> - ${this.ala_pivot}<br> - ${this.pivot}<br> # Y el asistente es:<br> - ${this.asistente}<br>`);
                    
                    // Visualización del resultado final en consola
                        console.log(`# (Hijo 2 - Metodo 2) Los Lesionados son: \n \t- ${this.base} \n \t- ${this.escolta} \n \t- ${this.alero} \n \t- ${this.ala_pivot} \n \t- ${this.pivot} \n # Y el asistente es: \n \t- ${this.asistente}`);
                }    

            
    }






/*
    -----------------------------------
        Instancias del constructor 
    -----------------------------------
*/

//Instanciar Padre "Baloncesto" . Visualización de Titulares
var lakers = new Baloncesto ("Stephen curry", "Kobe Bryant", "Michael Jordan", "Lebron James", "Shaquille O_neal");


/*
    Instancia hijo 1
*/
//Instanciar Hijo "Resto_de_Plantilla" . Visualización de Suplentes
var  Suplentes_lakers = new Resto_de_Plantilla("Chris Paul", "Allen Iverson", "Luka Donic", "Blake Griffin", "Tim Duncan");

//Instanciar Hijo "Resto_de_Plantilla" . Visualización de Suplentes y Entrenador
var Suplentes_lakers_entrenador  = new Resto_de_Plantilla("Chris Paul", "Allen Iverson", "Luka Donic", "Blake Griffin", "Tim Duncan",undefined);




/*
    Instancia hijo 2
*/
//Instanciar Hijo "Lesionados" . Visualización de Suplentes
var Lesionados_lakers= new Lesionados("OwiDragonFenix", "James Harden", "Paul George", "Anhony Davis", "Dwight Howard");

//Instanciar Hijo "Lesionados" . Visualización de Suplentes y Entrenador
var Lesionados_lakers_asistente= new Lesionados("OwiDragonFenix", "James Harden", "Paul George", "Anhony Davis", "Dwight Howard",undefined);










/*
    ---------------------------------------
        Llamada para visualización final
            "Instancia.Metodo" 
    --------------------------------------
 */

/*
    -llamada de "instancia - Lakers" . "metodo del padre" que esta dentro de la clase Baloncesto "plantilla_titulares"
    -"instancia - Lakers" . "metodo del padre  - plantilla_titulares"
*/

// Padre - Instancia Titulares
lakers.plantilla_titulares();

/*
    Hijo 1 - "Instancia. Metodo" 
*/

// Padre - Instancia Suplentes 
Suplentes_lakers.plantilla_suplentes();

// Padre - Instancia Suplentes y asistente
Suplentes_lakers_entrenador.plantilla_suplentes_entrenador();



/*
    Hijo 2 - "Instancia. Metodo" 
*/

// Padre - Instancia lesionados
Lesionados_lakers.plantilla_lesionados();

// Padre - Instancia lesionados y asistente
Lesionados_lakers_asistente.plantilla_lesionados_asistente();







