const product = {
    count: 15,
    price: 20.95,
    type: "libro"
}
let IvaAlimentacion;
let IvaAlimentacionDecimales;
let IvaLibro;
let IvaLibroDecimales;
let IvaRopa;
let IvaRopaDecimales;
let precioConIvaAlimentacion;
let precioConIvaAlimentacionDecimales;
let precioConIvaLibro;
let precioConIvaLibroDecimales;
let precioConIvaRopa;
let precioConIvaRopaDecimales;

if (product.count < 0) {
    product.count = 0;
}

if (product.type = "alimentacion") {
    IvaAlimentacion = product.price * 0.1;
    IvaAlimentacionDecimales = IvaAlimentacion.toFixed(2)
    console.log("El IVA por unidad en el caso de la alimentacion es: " + IvaAlimentacionDecimales);
    precioConIvaAlimentacion = (IvaAlimentacion + product.price) * product.count;
    precioConIvaAlimentacionDecimales = precioConIvaAlimentacion.toFixed(2);
    console.log(precioConIvaAlimentacionDecimales);
}
        else if (product.type = "libro") {
    IvaLibro = product.price * 0.4;
    IvaLibroDecimales = IvaLibro.toFixed(2);
    console.log("El IVA por unidad en el caso de libros es: " + IvaLibroDecimales);
    precioConIvaLibro = (IvaLibro + product.price) * product.count;
    precioConIvaLibroDecimales = precioConIvaLibro.toFixed(2);
    console.log(precioConIvaLibroDecimales);
}
            else if (product.type = "ropa") {
    IvaRopa = product.price * 0.21;
    IvaRopaDecimales = IvaRopa.toFixed(2);
    console.log("El IVA por unidad en el caso de ropas es: " + IvaRopaDecimales);
    precioConIvaRopa = (IvaRopa + product.price) * product.count;
    precioConIvaRopaDecimales = precioConIvaRopa.toFixed(2);
    console.log(precioConIvaRopaDecimales);
}

/* Tambien lo he metido en un switch*/
/*
switch (product.type) {
    case "libro":
        IvaAlimentacion = product.price * 0.1;
        IvaAlimentacionDecimales = IvaAlimentacion.toFixed(2)
        console.log("El IVA por unidad en el caso de la alimentacion es: " + IvaAlimentacionDecimales);
        precioConIvaAlimentacion = (IvaAlimentacion + product.price) * product.count;
        precioConIvaAlimentacionDecimales = precioConIvaAlimentacion.toFixed(2);
        console.log(precioConIvaAlimentacionDecimales);
        break
    case "libro":
        IvaLibro = product.price * 0.04;
        IvaLibroDecimales = IvaLibro.toFixed(2);
        console.log("El IVA por unidad en el caso de libros es: " + IvaLibroDecimales);
        precioConIvaLibro = (IvaLibro + product.price) * product.count;
        precioConIvaLibroDecimales = precioConIvaLibro.toFixed(2);
        console.log(precioConIvaLibroDecimales);
        break;
    case "ropa":
        IvaRopa = product.price * 0.21;
        IvaRopaDecimales = IvaRopa.toFixed(2);
        console.log("El IVA por unidad en el caso de ropas es: " + IvaRopaDecimales);
        precioConIvaRopa = (IvaRopa + product.price) * product.count;
        precioConIvaRopaDecimales = precioConIvaRopa.toFixed(2);
        console.log(precioConIvaRopaDecimales);
}
*/