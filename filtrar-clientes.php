<?php
 
require_once "classConexion.php";
require_once "Cliente.php";
require_once "daoCliente.php"; 

$datos = json_decode($_POST['datos']); //Cojo el objeto enviado desde el main js. Decodifico la cadena de JSON y lo convierto en un objeto de PHP. Datos es un objeto, porque todo lo que recoja de JSON es objeto

$apellido1 = $datos->apellido1; //Cojo la variable que me interesa del objeto

$daoCliente = new daoCliente("concesionario"); //Hago la conexión

$daoCliente->BuscarPorApellido1($apellido1); //Llamo al dao y ejecuto el buscar por apellido

echo json_encode($daoCliente->Clientes); //Mando los datos en la respuesta, codificados en formato JSON
 
?>