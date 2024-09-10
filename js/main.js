
alert("Bienvenidos a Krauz el lugar para encontrar tu reloj")+ alert("Por el mes de septiembre estamos ofreciendo descuentos del 30%.")+ alert("Diganos cual es el reloj que le interesa?")

let oferta;

do {
    oferta = prompt("Actualmente contamos con el stock de los siguientes relojes: Daytona, Deepsea, Perpetual, Submariner, Explorer").toLowerCase();
    
    let precio;
    
    if (oferta === "Daytona") {
    precio = 5;
    } else if (oferta === "Deepsea") {
    precio = 50;
    } else if (oferta === "Perpetual") {
    precio = 250;
    } else if (oferta === "Submariner") {
    precio = 500;
    } else if (oferta === "Explorer") {
    precio = 1500;
    } else {
    alert("Ese reloj no se encuentra en stock, ingrese otro");
    continue;
    }
    
    const usuarioDescuento = prompt("Cuentas con el descuento?, responda si o no").toLowerCase();
    
    function descuento(precio) {
    if (usuarioDescuento === "si") {
      return precio - ((precio * 30) / 100);
    } else if (usuarioDescuento === "no") {
    return precio;
    }
    }

    precio = descuento(precio);

    const IVA = 1.21;

    function iva(precio) {
     return precio * IVA;
    }
    
    const total = iva(precio);

    console.log("El reloj cuesta: $" + total);
    alert("El reloj cuesta: $" + total);
    
    } while(!(oferta === "Daytona" || oferta === "Deepsea" || oferta === "Perpetual" || oferta === "Submariner" || oferta === "Explorer"));