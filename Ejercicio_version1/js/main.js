 function desplegar(_valor){
                document.getElementById("bgventana").style.visibility=_valor;
}

(function (){
	var lista = document.getElementById ("lista"),
		tareaInput = document.getElementById ("tareaInput"),
		btnNuevo = document.getElementById ("agregar");

	var agregarTarea = function (){
		var tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a");
			contenido = document.createTextNode (tarea);

		if (tarea ==""){
			tareaInput.setAttribute ("placeholder", " Añade nombre de la lista");
			tareaInput.className ="error";
			return false;
		}

		enlace.appendChild (contenido);
		enlace.setAttribute("href", "#");
		nuevaTarea.appendChild(enlace);
		lista.appendChild(nuevaTarea);

		tareaInput.value="";

		for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", function(){
		this.parentNode.removeChild(this);
			});

		}

	};

	var verificarImput = function (){
	tareaInput.className="";
	tareaInput.setAttribute("placeholder"," Añade nombre de la lista");
	};	

	var eliminarTarea = function(){
	this.parentNode.removeChild(this);
	};

	btnNuevo.addEventListener("click", agregarTarea);
	tareaInput.addEventListener("click",verificarImput);

	for (var i = 0; i <= Things.lista.children.length -1; i++) {
		lista.children[i].addEventListener("click",borrarTarea);
	}

}());
