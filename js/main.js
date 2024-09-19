class Reloj {
  constructor(modelo, color, precio) {
   this.modelo = modelo;
   this.color = color;
   this.precio = precio;
  }
 }
 
 const libreria = [
  new Reloj("Daytona", "Verde", "$350"),
  new Reloj("Deepsea", "Azul", "$550"),
  new Reloj("Perpetual", "Rojo", "$1350"),
  new Reloj("Submariner", "Oro", "$2500"),
  new Reloj("Explorer", "Plateado", "$150"),
  new Reloj("Milgaus", "Negro", "$750"),  
  new Reloj("Vintage", "Plateado", "$450"),
  new Reloj("Cellini", "Clasico", "$550"),  
  new Reloj("President", "Oro", "$3000"),
  new Reloj("Datejust", "Verde", "$350"),  
  new Reloj("Oyster", "Blanco", "$3550"),
 ];
 
 function capitalize(text) {
  const firstLetter = text.charAt(0);
  const rest = text.slice(1);
  return firstLetter.toUpperCase() + rest;
 }
 
 function buscarReloj() {
  const opcion = parseInt(prompt("Buscar por: 1- Modelo, 2- Color, 3- Precio"));
 
  let resultados = [];
 
  switch(opcion) {
   case 1:
    const modelo = capitalize(prompt("Ingrese el modelo del reloj:"));
    resultados = libreria.filter(reloj => reloj.modelo.includes(modelo));
    break;
 
   case 2:
    const color = capitalize(prompt("Ingrese el color del reloj:"));
    resultados = libreria.filter(reloj => reloj.color.includes(color));
    break;
 
   case 3:
    const precio = capitalize(prompt("Ingrese el precio del reloj:"));
    resultados = libreria.filter(reloj => reloj.precio.includes(precio));
    break;
 
   default:
    console.log("Opción no válida. Intente nuevamente.");
  }
 
  if (resultados.length > 0) {
   console.log("Relojes encontrados:");
 
   resultados.forEach(reloj => {
    console.log(`Modelo: ${reloj.modelo}, Color: ${reloj.color}, Precio: ${reloj.precio}`);
   });
  } else {
   console.log("No se encontraron relojes.");
  }
 }
 
 function agregarReloj() {
  const modelo = capitalize(prompt("Ingrese el modelo del reloj"));
  const color = capitalize(prompt("Ingrese el color del reloj"));
  const precio = capitalize(prompt("Ingrese el precio del reloj"));
 
  const nuevoReloj = new Reloj(modelo, color, precio);
 
  libreria.push(nuevoReloj);
 
  console.log("Reloj agregado exitosamente.");
 }
 
 function modificarReloj() {
  const modelo = capitalize(prompt("Ingrese el modelo del reloj que desea modificar:"));
  const reloj = libreria.find(reloj => reloj.modelo === modelo);
 
  if (reloj) {
   reloj.modelo = capitalize(prompt("Ingrese el nuevo modelo del reloj:", reloj.modelo));
   reloj.color = capitalize(prompt("Ingrese el nuevo color del reloj:", reloj.color));
   reloj.precio = capitalize(prompt("Ingrese el nuevo precio del reloj:", reloj.precio));
 
   console.log("Reloj modificado.");
  } else {
   console.log("No se ha encontrado tu reloj.");
  }
 }
 
 function eliminarReloj() {
  const modelo = capitalize(prompt("Ingrese el modelo del reloj que desea eliminar:"));
  const indice = libreria.findIndex(reloj => reloj.modelo === modelo);
 
  if (indice !== -1) {
   libreria.splice(indice, 1);
   console.log("Reloj eliminado exitosamente.");
  } else {
   console.log("Reloj no encontrado.");
  }
 }
 
 function mostrarInventario() {
  libreria.forEach((reloj, index) => {
   console.log(`${index + 1}. Modelo: ${reloj.modelo}, Color: ${reloj.color}, Precio: ${reloj.precio}`);
  });
 }
 
 do {
  opciones = parseInt(prompt("1- Buscar un reloj 2- Agregar un reloj, 3- Modificar un reloj, 4- Eliminar un reloj, 5- Mostrar inventario, o 0- Salir"));
 
  switch(opciones) {
   case 1:
    buscarReloj();
    break;
 
   case 2:
    agregarReloj();
    break;
 
   case 3:
    modificarReloj();
    break;
 
   case 4:
    eliminarReloj();
    break;
 
   case 5:
    mostrarInventario();
    break;
 
   case 0:
    console.log("Saliendo del sistema...");
    console.log("Presiona F5 para volver a ingresar al inventario");
    break;
 
   default:
    console.log("Opción no válida. Ingrese un número de opción válido");
  }
 } while (opciones !== 0);
