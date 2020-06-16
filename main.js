function buscarClientes(){

    let busqueda=document.getElementById("Apellido1").value; //Cojo el elemento sobre el que escribo
    
    if(!busqueda==""){ //Si búsqueda no viene vacía realizo la petición AJAX, si no no hago nada
         // creo el objeto que realizara la llamada
    let llamada = new XMLHttpRequest();
 
    // url del php a llamar
    let url = "filtrar-clientes.php";
 
    // Creo los datos con JSON
    let datos = { 
        "apellido1": busqueda
    };
 
    // Indico los parametros que voy a mandar
    let params = "datos=" + JSON.stringify(datos); //Con Stringify paso de formato JSON a JSON cadena, porque PHP no entiende JSON pero sí JSON en cadena
 
    
    // Funcion que se ejecutara al recibir la respuesta
    llamada.onreadystatechange = function () {
        // si todo esta bien
        if (this.readyState === 4 && this.status === 200) {

            console.log(this.responseText);
            let datos = JSON.parse(this.responseText); //Parseo 

            //Crear con appendchild tabla y tal y rellenar para meter los datos dentro. Limpiar contenedor siempre que busques (cada vez que escribo algo)
            
            
            let contenedorApellido1=document.getElementById("contenedorApellido1"); //Cojo el contenedor
            contenedorApellido1.innerHTML=""; //Limpio el div cada vez que cojo el elemento

                    //Voy creando la estructura básica de la tabla
            let tabla=document.createElement("table"); 

            let tr1=document.createElement("tr");

            let thNIF=document.createElement("th");
            thNIFtexto=document.createTextNode("NIF");
            
            let thNombre=document.createElement("th");
            thNombretexto=document.createTextNode("Nombre");

            let thApellido1=document.createElement("th");
            thApellido1Texto=document.createTextNode("Apellido1");

            let thApellido2=document.createElement("th");
            thApellido2Texto=document.createTextNode("Apellido2");


            //Voy uniendo los elementos de la tabla para conformar la misma


        
            tabla.appendChild(tr1);

            tr1.appendChild(thNIF);
            thNIF.appendChild(thNIFtexto);

            tr1.appendChild(thNombre);
            thNombre.appendChild(thNombretexto);
            
            tr1.appendChild(thApellido1);
            thApellido1.appendChild(thApellido1Texto);

            tr1.appendChild(thApellido2);
            thApellido2.appendChild(thApellido2Texto);

            contenedorApellido1.appendChild(tabla); 

            

            //Ahora con la estructura básica de la tabla creada, lo que he de hacer es recorrer el array de objetos devuelto por PHP a fin de crear la tabla con los objetos que me devuelva la consulta

            for (let i = 0; i < datos.length; i++) {
               
            let tr2=document.createElement("tr");

            let tdNIF=document.createElement("td");
            tdNIFTexto=document.createTextNode(datos[i].NIF);
            tdNIF.appendChild(tdNIFTexto);
            
            let tdNombre=document.createElement("td");
            tdNombretexto=document.createTextNode(datos[i].Nombre);
            tdNombre.appendChild(tdNombretexto);

            let tdApellido1=document.createElement("td");
            tdApellido1Texto=document.createTextNode(datos[i].Apellido1);
            tdApellido1.appendChild(tdApellido1Texto);

            let tdApellido2=document.createElement("td");
            tdApellido2Texto=document.createTextNode(datos[i].Apellido2);
            tdApellido2.appendChild(tdApellido2Texto); 

            tabla.appendChild(tr2);

            tr2.appendChild(tdNIF);
            tr2.appendChild(tdNombre);
            tr2.appendChild(tdApellido1);
            tr2.appendChild(tdApellido2);

            }

/*<table>

  <tr>
    <th>NIF</th>
    <th>Nombre</th>
    <th>Apellido1</th>
    <th>Apellido2</th>
  </tr>

  <tr>
    <td>nif1</td>
    <td>nombre1</td>
    <td>apellido1</td>
    <td>apellido2</td>
  </tr>
  </table>
  
  */



        }
    }
    
    // Indico que es una peticion POST
    llamada.open("POST", url, true);
    // Esta linea es necesaria en una peticion POST
    llamada.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    llamada.send(params); // Le paso los parametros
    } else {
        let contenedorApellido1=document.getElementById("contenedorApellido1"); //Cojo el contenedor
        contenedorApellido1.innerHTML=""; //Limpio la tabla
    }
}
