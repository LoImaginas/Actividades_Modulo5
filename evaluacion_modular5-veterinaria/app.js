// ===============================
// CLASES
// ===============================

class Mascota {
  constructor(nombre, tutor, evolucionMedica) {
    this.nombre = nombre;
    this.tutor = tutor;
    this.evolucionMedica = evolucionMedica;
  }
}

class Veterinario {
  constructor(nombreUsuario, contrasena) {
    this.nombreUsuario = nombreUsuario;
    this.contrasena = contrasena;
    this.mascotas = [];
  }

  agregarMascota(mascota) {
    this.mascotas.push(mascota);
  }

  obtenerMascotas() {
    return this.mascotas;
  }
}

// ===============================
// DATOS INICIALES (LOGIN)
// ===============================

const veterinarios = [
  new Veterinario("vet1", "1234"),
  new Veterinario("vet2", "abcd")
];

let veterinarioActivo = null;

// ===============================
// ELEMENTOS DOM
// ===============================

const formLogin = document.getElementById("formLogin");
const inputUsuario = document.getElementById("loginUsuario");
const inputPassword = document.getElementById("loginPassword");

const seccionLogin = document.getElementById("seccionLogin");
const seccionApp = document.getElementById("seccionApp");

const vetActivo = document.getElementById("vetActivo");

const formMascota = document.getElementById("formMascota");
const mascotaNombre = document.getElementById("mascotaNombre");
const mascotaTutor = document.getElementById("mascotaTutor");
const mascotaEvolucion = document.getElementById("mascotaEvolucion");

const listaPacientes = document.getElementById("listaPacientes");
const contadorPacientes = document.getElementById("contadorPacientes");

const mensaje = document.getElementById("mensaje");

const btnLogout = document.getElementById("btnLogout");

// ===============================
// FUNCIONES
// ===============================

const mostrarMensaje = (texto, tipo) => {
  mensaje.textContent = texto;
  mensaje.className = "mensaje";

  if (tipo === "ok") mensaje.classList.add("ok");
  if (tipo === "error") mensaje.classList.add("error");

  setTimeout(() => {
    mensaje.textContent = "";
    mensaje.className = "mensaje";
  }, 3000);
};

// ===============================
// LOGIN
// ===============================

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  const usuario = inputUsuario.value;
  const password = inputPassword.value;

  const encontrado = veterinarios.find(
    v => v.nombreUsuario === usuario && v.contrasena === password
  );

  if (!encontrado) {
    mostrarMensaje("Usuario o contraseña incorrectos", "error");
    return;
  }

  veterinarioActivo = encontrado;

  vetActivo.textContent = `Veterinario: ${veterinarioActivo.nombreUsuario}`;

  seccionLogin.classList.add("hidden");
  seccionApp.classList.remove("hidden");

  mostrarMensaje("Inicio de sesión exitoso", "ok");
});

// ===============================
// LOGOUT
// ===============================

btnLogout.addEventListener("click", () => {

  veterinarioActivo = null;

  seccionApp.classList.add("hidden");
  seccionLogin.classList.remove("hidden");

  listaPacientes.innerHTML = "";
  contadorPacientes.textContent = "0";

  mostrarMensaje("Sesión cerrada", "ok");
});

// ===============================
// REGISTRAR MASCOTA
// ===============================

formMascota.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = mascotaNombre.value;
  const tutor = mascotaTutor.value;
  const evolucion = mascotaEvolucion.value;

  const nuevaMascota = new Mascota(nombre, tutor, evolucion);

  veterinarioActivo.agregarMascota(nuevaMascota);

  renderPacientes();

  formMascota.reset();

  mostrarMensaje("Mascota registrada correctamente", "ok");
});

// ===============================
// RENDER PACIENTES
// ===============================

const renderPacientes = () => {

  const mascotas = veterinarioActivo.obtenerMascotas();

  listaPacientes.innerHTML = "";

  mascotas.forEach(({nombre, tutor, evolucionMedica}) => {

    const li = document.createElement("li");
    li.classList.add("item");

    li.innerHTML = `
      <div class="top">
        <strong>${m.nombre}</strong>
        <span class="badge">Tutor: ${tutor}</span>
      </div>
      <p>${evolucionMedica}</p>
    `;

    listaPacientes.appendChild(li);
  });

  contadorPacientes.textContent = `${mascotas.length} pacientes`;
};