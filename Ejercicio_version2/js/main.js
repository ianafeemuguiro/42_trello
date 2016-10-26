function myFunction() { //Este ya lo hice yo sin ayuda de tutoriales, pero todavía no me sale :(
    var caja = document.createElement("div");
    document.body.appendChild(caja);

    var papa = document.getElementById("papa");

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("value", "Nombre");
    input.className="inputcaja"
   	var boton = document.createElement("button");
 	var guardar = document.createTextNode ("Guardar");
 	//Asociar padres con hijos
 	boton.appendChild(guardar); 
   	caja.appendChild(input); 
   	papa.appendChild(caja);  
   	caja.appendChild(boton);

    boton.onclick =function(){
      var textarea= document.createElement("textarea");
      caja.appendChild(textarea);
      textarea.className= "orden";
      textarea.className = "bloque";
     
    }

}

