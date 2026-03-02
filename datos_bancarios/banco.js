// ============================================================
// M5 - C4  Aplicando ES6+ en Gestión de Datos Bancarios
// ============================================================

console.log("=== AE-2 | Gestión de Datos Bancarios (ES6+) ===");

// 0) Datos base (tal cual el PDF)
const nuestroBanco = "Banco del Pantano";
const pagos = [
  { id: 1, monto: 100, fecha: "2022-01-01", empresaId: 1 },
  { id: 2, monto: 200, fecha: "2022-01-02", empresaId: 2 },
  { id: 3, monto: 300, fecha: "2022-01-03", empresaId: 3 },
  { id: 4, monto: 400, fecha: "2022-01-04", empresaId: 1 },
  { id: 5, monto: 500, fecha: "2022-01-05", empresaId: 2 },
  { id: 6, monto: 600, fecha: "2022-01-06", empresaId: 3 },
  { id: 7, monto: 700, fecha: "2022-01-07", empresaId: 1 },
  { id: 8, monto: 800, fecha: "2022-01-08", empresaId: 2 },
  { id: 9, monto: 900, fecha: "2022-01-09", empresaId: 3 },
  { id: 10, monto: 1000, fecha: "2022-01-10", empresaId: 1 },
];

const empresas = [
  { id: 1, nombre: "Maceta Alta" },
  { id: 2, nombre: "Ladrillo Viejo" },
  { id: 3, nombre: "Humedad Eterna por Siempre" },
  { id: 4, nombre: null },
];

// ------------------------------------------------------------
// 1) Imprime por consola la cantidad de pagos usando template literals
// ------------------------------------------------------------
console.log(`\n1) En ${nuestroBanco} hay ${pagos.length} pagos registrados.`);

// ------------------------------------------------------------
// 2) Función: obtener los pagos de una empresa por su ID
// ------------------------------------------------------------
const obtenerPagosPorEmpresaId = (empresaId) => {
  return pagos.filter((pago) => pago.empresaId === empresaId);
};

console.log("\n2) Pagos de empresaId=1:", obtenerPagosPorEmpresaId(1));

// ------------------------------------------------------------
// 3) Función: obtener balance total de todos los pagos
// ------------------------------------------------------------
const obtenerBalanceTotal = () => {
  return pagos.reduce((acum, pago) => acum + pago.monto, 0);
};

console.log(`\n3) Balance total de pagos: $${obtenerBalanceTotal()}`);

// ------------------------------------------------------------
// 4) Función: obtener pagos después de una fecha dada
// (la fecha viene como "YYYY-MM-DD")
// ------------------------------------------------------------
const obtenerPagosDespuesDe = (fecha) => {
  return pagos.filter((pago) => pago.fecha > fecha);
};

console.log("\n4) Pagos después de 2022-01-05:", obtenerPagosDespuesDe("2022-01-05"));

// ------------------------------------------------------------
// 5) Destructuring: separar cada empresa en una variable e imprimir nombres
// ------------------------------------------------------------
const [empresa1, empresa2, empresa3, empresa4] = empresas;

console.log("\n5) Empresas (destructuring):");
console.log(" -", empresa1.nombre ?? "Sin nombre");
console.log(" -", empresa2.nombre ?? "Sin nombre");
console.log(" -", empresa3.nombre ?? "Sin nombre");
console.log(" -", empresa4.nombre ?? "Sin nombre");

// ------------------------------------------------------------
// 6) Añadir nueva empresa e imprimir lista actualizada
// ------------------------------------------------------------
const nuevaEmpresa = { id: 5, nombre: "Dulce Capital" };
empresas.push(nuevaEmpresa);

console.log("\n6) Lista de empresas actualizada:", empresas);

// ------------------------------------------------------------
// 7) Añadir nuevo pago de la nueva empresa e imprimir lista actualizada
// ------------------------------------------------------------
const nuevoPago = { id: 11, monto: 750, fecha: "2022-01-11", empresaId: 5 };
pagos.push(nuevoPago);

console.log("\n7) Lista de pagos actualizada:", pagos);

// ------------------------------------------------------------
// 8) Función: editar monto de un pago dado su ID e imprimir lista actualizada
// ------------------------------------------------------------
const editarMontoPago = (pagoId, nuevoMonto) => {
  const pagoEncontrado = pagos.find((p) => p.id === pagoId);

  if (!pagoEncontrado) {
    console.log(`❌ No existe un pago con id=${pagoId}`);
    return false;
  }

  pagoEncontrado.monto = nuevoMonto;
  console.log(`✅ Pago id=${pagoId} actualizado. Nuevo monto: $${nuevoMonto}`);
  return true;
};

// Prueba del punto 8
console.log("\n8) Editando monto del pago id=2...");
editarMontoPago(2, 999);
console.log("Lista de pagos (luego de editar):", pagos);