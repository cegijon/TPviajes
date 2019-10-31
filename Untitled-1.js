let nombre = prompt("¡Bienvenida a nuestra agencia de viajes! ¿Cómo te llamás?"); 

let producto1 = "un pasaje a Aruba para una persona"
let producto2 = "un pasaje a Cancún para una persona"

const bienvenida = confirm(`Hola ${nombre}! Tenemos dos viajes en promoción: 

${producto1}
${producto2}`);

// atencion al espacio entre operadores: let respuesta1 = "si"
// Quizá preferiríamos un nombre más descriptivo para estas variables. A primera vista, no sabemos si
// "respuesta1" es un sí o un no. 
let respuesta1= "si"
let respuesta2 = "no"

let pregunta1 = prompt(`¿Te gustaría comprar ${producto1}? Respondé con SI o NO`)

// La lógica acá está muy bien. Me intriga el Number(0). 0 ya es un número, por lo que no tiene sentido
// usar acá el método Number(). 
let cantidadProducto1 = pregunta1 == respuesta1 && prompt("¿Cuántos pasajes te gustaría comprar?") || 
pregunta1 == respuesta2 && Number(0)

let pregunta2 = prompt(`¿Te gustaría comprar ${producto2}? Respondé con SI o NO`)

let cantidadProducto2 = pregunta2 == respuesta1 && prompt("¿Cuántos pasajes te gustaría comprar?") ||
pregunta2 == respuesta2 && Number(0)

let precio1 = 22500;
let precio2 = 18000;

let subtotal1 = cantidadProducto1 * precio1
let subtotal2 = cantidadProducto2 * precio2
let total = subtotal1 + subtotal2

confirm(`Te mostramos el detalle de tu compra:
${cantidadProducto1} x ${precio1} = ${subtotal1};
${cantidadProducto2} x ${precio2} = ${subtotal2}
Total: ${total}`)

let pagaConTarjeta = prompt(`¿Te gustaría abonar con tarjeta? Respondé con SI o NO`)

// Acá hay un error. 
// En el segundo operando, debería ser pagaConTarjeta == respuesta 2 en lugar de cantidadDeCuotas == respuesta2
// (no tiene sentido usar la variable cantidadDeCuotas en su misma declaración, y de hecho si elegimos
// pagar sin tarjeta, esto provoca un error que hace que se corte la ejecución del programa)
let cantidadDeCuotas = pagaConTarjeta == respuesta1 && prompt("¿En cuántas cuotas? Podés hacerlo en 1, 3 o 6") || 
cantidadDeCuotas == respuesta2 && Number(0)


let UnaCuota = total
let TresCuotas = total / 3 
let SeisCuotas = total / 6

let totalFinal = total / cantidadDeCuotas 
confirm(`Te mostramos el detalle de lo que tenés que abonar: 
${cantidadProducto1} x ${precio1} = ${subtotal1} 
${cantidadProducto2} x ${precio2} = ${subtotal2} 
Número de cuotas = ${cantidadDeCuotas} 
Total: ${totalFinal}`);

let codigoAda = "ADALOVELACE"
let codigoDescuento = prompt(`¿Tenés un código de descuento? Respondé con SI o NO`)


let IngresaCodigo = codigoDescuento == respuesta1 && prompt(`Ingresá tu código de descuento`)
// si respondemos "no" en el prompt de codigoDescuento, la variable "IngresaCodigo" pasa a valer "false". 
// Esto hace que se nos responda que el código es inválido aunque nunca se nos pida ese código. 
IngresaCodigo != codigoAda && alert(`El código ingresado es inválido`)

// No entiendo esta validación. ¿Cual es la función que cumple codigoAda acá?
let compraConCodigo = codigoAda && (totalFinal - ((totalFinal * 15) / 100))

confirm(`Tu código se ingresó correctamente. Se aplicó el 15% 
Te mostramos el detalle de lo que tenés que abonar:
${cantidadProducto1} x ${precio1} = ${subtotal1}
${cantidadProducto2} x ${precio2} = ${subtotal2}
Número de cuotas = ${cantidadDeCuotas}
Subtotal: ${total}
Valor de cuotas = ${totalFinal}
Descuento aplicado = -15%
Total con descuento: ${compraConCodigo}
`)

confirm(`Gracias por tu compra! Que tengas un buen viaje! ✈️🏖️`)

// Muy buen trabajo!
