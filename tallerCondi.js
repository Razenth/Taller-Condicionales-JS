//-------------------------- 1

// let num1=+prompt('Digite un número')
// let num2=+prompt('Digite otro número')

// if (num1>num2){
//     alert(`${num2},${num1}`)

// }else{
//     alert(`${num1},${num2}`)
// }

//--------------------------- 2

// let num1=+prompt('Digite un número')
// i=num1%2

// if (num1>=1 && num1<=10){

//     switch(i){

//     case 0:
//         alert(`Es un número par`)
//         break


//     case 1:
//         alert(`ES un número impar`)
//         break

//     }
// }else{
//     alert('Número fuera del rango')

//----------------------------- 3

// let num1=+prompt('Ingrese un número')

// if (num1>=1 && num1<=10){

//     switch(num1){
//     case 1:
//         alert('1 = Uno')
//         break
//     case 2:
//         alert('2 = Dos')
//         break
//     case 3:
//         alert('3 = Tres')
//         break
//     case 4:
//         alert('4 = Cuatro')
//         break
//     case 5:
//         alert('5 = Cinco')
//         break
//     case 6:
//         alert('6 = Seis')
//         break
//     case 7:
//         alert('7 = Siete')
//         break
//     case 8:
//         alert('8 = Ocho')
//         break
//     case 9:
//         alert('9 = Nueve')
//         break
//     case 10:
//         alert('10 = Diez')
//         break
//     }
// }else{
//     alert('Número fuera del rango')
// }

//------------------------------- 4

// let minutos=+prompt('Ingrese número de minutos usados')

// if (minutos<=3){
//     alert('Su llamada tiene un costo de $200')

// }else{
//     minutos-=3
//     alert(`Su llamada tiene un costo de ${200+(minutos*100)}`)
// }

//---------------------------------- 5

// let precioConejosB=+prompt('Ingrese precio del conejo blanco')
// let ConejosB=+prompt('Ingrese cantidad de conejos blancos vendida')
// let precioConejosN=+prompt('Ingrese precio del conejo negro')
// let ConejosN=+prompt('Ingrese cantidad de conejos negros vendida')

// cantidadVendi=(ConejosB+ConejosN)

// p1=(ConejosB*precioConejosB)
// p2=(ConejosN*precioConejosN)

// montoTo=p1+p2
// mayor=0
// if (ConejosB>ConejosN){
//     mayor='Blancos'
// }else{
//     mayor='Negros'
// }
// alert(`
// Cantidad de conejos vendida: ${cantidadVendi}
// Monto Total de venta: ${montoTo}
// Mayor número de conejos vendidos: ${mayor}`)

//----------------------------------- 6 

// let evalu1,evalu2,evalu3,traba1,traba2,evaluprom,trabaprom,notafin

//  evalu1=parseFloat(prompt('Ingrese nota de evaluación 1: '))
//  evalu2=parseFloat(prompt('Ingrese nota de evaluación 2: '))
//  evalu3=parseFloat(prompt('Ingrese nota de evaluación 3: '))

// if (evalu1>=1 && evalu1<=5 && evalu2>=1 && evalu2<=5 && evalu3>=1 && evalu3<=5){

//     let traba1=parseFloat(prompt('Ingrese nota de trabajo 1: '))
//     let traba2=parseFloat(prompt('Ingrese nota de trabajo 2: '))

//     if (traba1>=1 && traba1<=5 && traba2>=1 && traba2<=5){

//         let evaluprom=(((evalu1+evalu2+evalu3)/3)*0.6)  
//         let trabaprom=(((traba1+traba2)/2)*0.4)
//         let notafin=(evaluprom+trabaprom)

//         alert(`Su nota final es de ${notafin}`)

//     }else{
//         alert('Error en datos ingresados')
//     }


// }else{
//     alert('Error en datos ingresados')
// }

//--------------------------------------- 7 

// let nombreart,precio,cantidad,preciodesc,txt,clave,desc=0

// nombreart=prompt('Ingrese el artículo a comprar: ')
// precio=+prompt('Ingrese precio del producto: ')
// cantidad=+prompt('Ingrese cantidad a comprar: ')
// clave=+prompt('Ingrese clave de descuento: ')

// if (clave==1){
//     desc=0.1
//     txt='Clave del descuento 1: 10%'

// }else if (clave==2){
//     desc=0.2
//     txt='Clave de descuento 2: 20%'


// }else{
//     desc=0
//     txt=`Clave de descuento ${clave}: Sin descuento`
// }
// preciototal=precio*cantidad
// preciodesc=preciototal-(preciototal*desc)

// alert(`

// --------------------------------------------------------
// Producto: ${nombreart}
// Precio Unidad: ${precio}
// Precio total Cant: ${preciototal}
// ${txt}
// Precio con descuento: ${preciototal-(preciototal*desc)}
// ---------------------------------------------------------
// `)

//------------------------------------------ 8 

// let presupuesto,porcPedia,porcPsico,porcTrauma,total1,total2,total3

// presupuesto=+prompt('Ingrese el presupuesto anual')

// porcPsico=parseFloat(prompt('Ingrese porcentaje a brindar para Psicología '))
// porcPedia=parseFloat(prompt('Ingrese porcentaje a brindar para Pediatría '))
// porcTrauma=parseFloat(prompt('Ingrese porcentaje a brindar para Traumatología '))


// if (porcPedia+porcPsico+porcTrauma==100){

//     total1=(presupuesto*porcPsico)/100
//     total2=(presupuesto*porcPedia)/100
//     total3=(presupuesto*porcTrauma)/100

//     alert(`
//     ---------------------------------
//     Presupuesto Total: ${presupuesto}
//     ---------------------------------

//     Porcentaje para Psicología:${porcPsico}%
//     Presupuesto Obtenido:${total1}

//     ---------------------------------

//     Porcentaje para Pediatría:${porcPedia}%
//     Presupuesto Obtenido:${total2}

//     ---------------------------------

//     Porcentaje para Psicología:${porcTrauma}%
//     Presupuesto Obtenido:${total3}

//     ---------------------------------

    
//     `)

// }else{
//     alert('Error en los datos ingresados')
// }

//------------------------------------------ 9

// let distancia,valorKm,estancia=0

// estancia=+prompt('Ingrese días de estancia ')
// distancia=+prompt('Ingrese distancia de vuelo (solo ida)')

// distancia=distancia+distancia
// valorKm=distancia*2.5

// if (distancia>800 && estancia>=7){

//     alert(`
//     Su boleto tiene un 30% de descuento
//     Su precio a pagar es de: ${valorKm-(valorKm*0.3)}
//     `)

// }else{
//     alert(`
//     Su boleto no tiene descuento
//     Su precio a pagar es de: ${valorKm}`)
// }






