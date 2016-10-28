 function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
    document.getElementById("dragtarget").innerHTML = "Añade el nombre de tu lista";
}

function dragEnd(event) {
    document.getElementById("dragtarget").innerHTML = "Tu texto se a pasado";
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

function  myFunction (){
  var box = document.createElement("div");
  document.body.appendChild(box);

  var father = document.getElementById("father");
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("class", "save");
  input.setAttribute("value", "Escribe el nombre de tu lista");
  input.className = "inputbox"
  var save = document.createTextNode ("Crear listas");
  var btn = document.createElement("button");
  btn.className = "save"

  //Papis con morros

  btn.appendChild(save);
  box.appendChild(input);
  father.appendChild(box);
  box.appendChild(btn);

    btn.onclick = function (){
      var textarea= document.createElement("textarea");
      box.appendChild(textarea);
      textarea.className = "introtext";
      }   
}


 
  