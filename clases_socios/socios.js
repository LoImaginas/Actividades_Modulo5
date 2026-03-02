// ============================================================
// Módulo 5 - Act-1
// Gestión de Socios
// ============================================================

console.log("=== Sistema de Gestión de Socios ===");


// ------------------------------------------------------------
// Clase Socio
// ------------------------------------------------------------

class Socio {
  static totalSocios = 0; // contador de instancias de Socio
  #activo;

  constructor(id, nombre, apellido, edad) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.#activo = false;

    Socio.totalSocios++; // se incrementa al crear un nuevo socio
  }

  activar() {
    this.#activo = true;
    console.log(`✅ El socio ${this.nombre} ${this.apellido} ha sido activado.`);
  }

  editarSocio(nuevoNombre, nuevoApellido, nuevaEdad) {
    this.nombre = nuevoNombre;
    this.apellido = nuevoApellido;
    this.edad = nuevaEdad;
    console.log("✏️ Datos del socio actualizados.");
  }

  verificarEdad() {
    if (this.edad >= 18) {
      console.log(`🔞 ${this.nombre} ${this.apellido} es mayor de edad.`);
      return true;
    }
    console.log(`🚫 ${this.nombre} ${this.apellido} es menor de edad.`);
    return false;
  }

  mostrarDatos() {
    console.log("----- Datos del socio -----");
    console.log(`ID: ${this.id}`);
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Apellido: ${this.apellido}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`Activo: ${this.#activo ? "Sí" : "No"}`);
  }
}

// ------------------------------------------------------------
// Clase Socios
// ------------------------------------------------------------

class Socios {
  constructor() {
    this.listaSocios = [];
  }

  agregarSocio(socio) {
    this.listaSocios.push(socio);
    console.log(`➕ Socio agregado al registro.`);
  }

  mostrarDatos() {
    console.log("\n=== Lista de socios ===");

    if (this.listaSocios.length === 0) {
      console.log("No hay socios registrados.");
      return;
    }

    for (let i = 0; i < this.listaSocios.length; i++) {
      this.listaSocios[i].mostrarDatos();
    }
  }

  static mostrarTotalSocios() {
    console.log(`📌 Total de socios creados: ${Socio.totalSocios}`);
  }
}

// ------------------------------------------------------------
// Pruebas Clase Socio
// ------------------------------------------------------------

const socio1 = new Socio(1, "Lo", "Llanquinao", 37);

socio1.mostrarDatos();
socio1.verificarEdad();
socio1.activar();
socio1.editarSocio("Lolett", "Llanquinao", 38);
socio1.mostrarDatos();

// ------------------------------------------------------------
// Pruebas Clase Socios (plural)
// ------------------------------------------------------------

const registro = new Socios();

const socio2 = new Socio(2, "Charly", "Villagra", 38);
const socio3 = new Socio(3, "Puntito", "Bebé", 5);

registro.agregarSocio(socio1);
registro.agregarSocio(socio2);
registro.agregarSocio(socio3);

socio1.activar();
socio3.verificarEdad();

socio2.editarSocio("Carlos", "Villagra", 38);

registro.mostrarDatos();
Socios.mostrarTotalSocios();