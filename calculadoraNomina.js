const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14,
}

let restarRetencion;
let retencion;
let retencionHijos;
let resultadoRetencion;
let sueldoNetoAnual; 
let sueldoNetoMensual;

if(empleado.hijos > 1){
    restarRetencion = 0.02;
} else {
    restarRetencion = 0;
}


if(empleado.bruto > 12000 && empleado.bruto < 24000){
    retencion = 0.08;
    retencionHijos = retencion - restarRetencion;
    resultadoRetencion = empleado.bruto * retencionHijos;
    sueldoNetoAnual = empleado.bruto - resultadoRetencion;
    sueldoNetoMensual = sueldoNetoAnual / empleado.pagas;
    
} else if(empleado.bruto >24000 && empleado.bruto < 34000){
    retencion = 0.16;
    retencionHijos = retencion - restarRetencion;
    resultadoRetencion = empleado.bruto * retencionHijos;
    sueldoNetoAnual = empleado.bruto - resultadoRetencion;
    sueldoNetoMensual = sueldoNetoAnual / empleado.pagas;
} else if (empleado.bruto > 34000){
    retencion = 0.3;
    retencionHijos = retencion - restarRetencion;
    resultadoRetencion = empleado.bruto * retencionHijos;
    sueldoNetoAnual = empleado.bruto - resultadoRetencion;
    sueldoNetoMensual = sueldoNetoAnual / empleado.pagas;
}

console.log ("El sueldo neto anual del empleado es: " + sueldoNetoAnual);
console.log ("El sueldo neto mensual del empleado es: " + sueldoNetoMensual);