const tareaInput = document.getElementById("tareaInput");
const agregarBtn = document.getElementById("agregarBtn");
const listaTareas = document.getElementById("listaTareas");

agregarBtn.addEventListener("click", agregarTarea);

tareaInput.addEventListener("keypress", function(evento) {
    if (evento.key === "Enter") {
        agregarTarea();
    }
});

function agregarTarea() {
    const texto = tareaInput.value.trim();

    if (texto === "") {
        alert("Escribe una tarea antes de agregarla.");
        return;
    }

    const tarea = document.createElement("li");
    tarea.classList.add("tarea");

    const textoTarea = document.createElement("span");
    textoTarea.textContent = texto;

    textoTarea.addEventListener("click", function() {
        textoTarea.classList.toggle("completada");
    });

    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.classList.add("eliminar");

    eliminarBtn.addEventListener("click", function() {
        tarea.remove();
    });

    tarea.appendChild(textoTarea);
    tarea.appendChild(eliminarBtn);

    listaTareas.appendChild(tarea);

    tareaInput.value = "";
    tareaInput.focus();
}