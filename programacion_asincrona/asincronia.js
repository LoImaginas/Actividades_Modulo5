console.log("=== Paso 1: Callbacks ===");

function cargarDatos(callback) {
  console.log("Cargando datos...");

  setTimeout(() => {
    const exito = true; // cambia a false para probar error

    if (exito) {
      const datos = ["Producto 1", "Producto 2", "Producto 3"];
      callback(null, datos);
    } else {
      callback("❌ Error al cargar datos", null);
    }
  }, 2000);
}

function procesarDatos(error, datos) {
  if (error) {
    console.error(error);
  } else {
    console.log("Datos recibidos:", datos);
  }
}

cargarDatos(procesarDatos);

// =====================================================
// Paso 2: Promesas
// =====================================================

console.log("\n=== Paso 2: Promesas ===");

function cargarDatosPromesa() {
  console.log("Cargando datos con promesa...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true; // cambia a false para probar error

      if (exito) {
        resolve(["Usuario 1", "Usuario 2", "Usuario 3"]);
      } else {
        reject("❌ Error al cargar datos con promesa");
      }
    }, 2000);
  });
}

cargarDatosPromesa()
  .then(datos => {
    console.log("Datos recibidos:", datos);
  })
  .catch(error => {
    console.error(error);
  });

  // =====================================================
// Paso 3: Async / Await
// =====================================================

console.log("\n=== Paso 3: Async/Await ===");

function obtenerDatosAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true; // cambia a false para probar error

      if (exito) {
        resolve(["Dato A", "Dato B", "Dato C"]);
      } else {
        reject("❌ Error al obtener datos con async/await");
      }
    }, 2000);
  });
}

async function cargarDatosAsync() {
  console.log("Cargando datos con async/await...");

  try {
    const datos = await obtenerDatosAsync();
    console.log("Datos recibidos:", datos);
  } catch (error) {
    console.error(error);
  }
}

cargarDatosAsync();


// =====================================================
// Desafío: Simulador de Descarga Asíncrona
// =====================================================

console.log("\n=== Desafío: Simulador de Descarga ===");

function simularDescarga(nombreArchivo, duracion, exito) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve(`✅ Archivo ${nombreArchivo} descargado exitosamente`);
      } else {
        reject(`❌ Error al descargar ${nombreArchivo}`);
      }
    }, duracion);
  });
}

async function descargarArchivos() {
  console.log("Iniciando descargas...");

  try {
    const archivo1 = await simularDescarga("reporte.pdf", 2000, true);
    console.log(archivo1);

    const archivo2 = await simularDescarga("imagen.png", 3000, false);
    console.log(archivo2);

  } catch (error) {
    console.error(error);
  }
}

descargarArchivos();

// ============================================================
// Reflexión final
// ============================================================

console.log("\n=== Reflexión Final ===");

// 1
console.log("1) ¿Qué problema resuelve la programación asíncrona?");
console.log("La programación asíncrona permite que el programa no se quede detenido esperando una respuesta, como una descarga o una consulta a un servidor. Así puede seguir ejecutando otras tareas mientras espera.");

// 2
console.log("\n2) ¿Cuál es la diferencia entre callbacks, promesas y async/await?");
console.log("Los callbacks fueron la primera forma de manejar tareas asíncronas, pero pueden volverse difíciles de leer.");
console.log("Las promesas mejoran esto organizando el resultado en resolve o reject.");
console.log("Async/await hace que el código sea más claro y parecido al código normal, facilitando la lectura y el manejo de errores.");

// 3
console.log("\n3) ¿Por qué es importante manejar errores en procesos asíncronos?");
console.log("Es importante porque en procesos reales pueden ocurrir fallas, como problemas de conexión. Manejar errores evita que el programa se rompa y permite informar correctamente lo que ocurrió.");