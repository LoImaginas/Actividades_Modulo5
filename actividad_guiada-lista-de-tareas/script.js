const input = document.getElementById("tareaInput");
const boton = document.getElementById("agregarBtn");
const lista = document.getElementById("listaTareas");

boton.addEventListener("click", () => {
  if (input.value === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  // Evento para marcar como completada
  li.addEventListener("click", () => {
    li.classList.toggle("completada");
  });

  // Botón eliminar
  const eliminarBtn = document.createElement("button");
  eliminarBtn.textContent = "❌";
  eliminarBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // evita marcar como completada
    li.remove();
  });

  li.appendChild(eliminarBtn);
  lista.appendChild(li);

  input.value = "";
});