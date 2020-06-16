<?php

require_once("Cliente.php");
require_once("classConexion.php");

class daoCliente extends Conexion { //Esta clase hereda de Conexión.
	
              
               public $Clientes=array();    //Array de objetos Clientes
               

	
	           public function Listar() //Función para listar los clientes
	           {
				   
				  $this->Clientes=array(); //Hay que vaciar el array de objetos clientes 
				   
				  $consulta="select * from clientes";

                  $param=array(); //Creo un array para pasarle parámetros

                  $this->Consulta($consulta,$param); //Ejecuto la consulta
            			
				  foreach ($this->datos as $fila)  //Recorro el array de la consulta
				  {
					   
					  $cli = new Cliente();  //Creo un nuevo objeto
                                             //Le seteo las variables, y así me ahorro el constructor   
                      $cli->NIF = $fila["NIF"]; //Accedo a la propiedad directamente
					  $cli->__SET("Nombre",$fila["Nombre"]);
					  $cli->__SET("Apellido1",$fila["Apellido1"]);
					  $cli->__SET("Apellido2",$fila["Apellido2"]);
					 
                      $this->Clientes[]=$cli; //Meto el cliente en el array Clientes

				  }
               }

               public function BuscarPorApellido1($apellido1) //Función para buscar los clientes por apellido1
               {
                   
                $this->Clientes=array(); //Hay que vaciar el array de objetos clientes 

                $consulta="select * from clientes WHERE upper(Apellido1) LIKE '%". strtoupper($apellido1) ."%'"; //Construyo la consulta SQL
                //Con el Like le digo que contenga los caracteres de esa variable

                $param=array(); 

                $this->Consulta($consulta,$param); //Ejecuto la consulta
                
                foreach ($this->datos as $fila)  //Recorro el array de la consulta
                {
					   
					  $cli = new Cliente();  //Creo un nuevo objeto
                                             //Le seteo las variables, y así me ahorro el constructor   
                      $cli->NIF = $fila["NIF"]; //Accedo a la propiedad directamente
					  $cli->__SET("Nombre",$fila["Nombre"]);
					  $cli->__SET("Apellido1",$fila["Apellido1"]);
					  $cli->__SET("Apellido2",$fila["Apellido2"]);
					 
                      $this->Clientes[]=$cli; //Meto el cliente en el array Clientes
                }
              
            }

     
        }