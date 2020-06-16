<?php

class Cliente implements JsonSerializable { //Siempre que use AJAX implemento JSON Serializable en el objeto para que se puedan pasar los objetos como JSON
    
    //Atributos de la clase
     private $NIF;
     private $Nombre;
     private $Apellido1;
     private $Apellido2;

    //Creo los getters y setters. Por cómo voy a hacer el programa, no necesito constructor.
	 public function __GET($propiedad)
	 {
		 return $this->$propiedad;
	 }
	 public function __SET($propiedad,$valor)
	 {
		 $this->$propiedad=$valor;
     }
     
     public function jsonSerialize() //Con esto indico cómo voy a pasar los objetos por JSON
	 {
        return array(
            "NIF" => $this->NIF,
            "Nombre" => $this->Nombre,
            "Apellido1" => $this->Apellido1,
            "Apellido2" => $this->Apellido2
        );
	 }
		
}

?>