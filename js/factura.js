
function valor(){
    let nombre, nombre1, cantidad,  precio

    nombre = document.getElementById("nombre").value
    nombre1 = document.getElementById("nombre1").value
    cantidad = document.getElementById("cantidad").value
    precio = document.getElementById("precio").value
  multiplicacion = (cantidad * precio)

 document.getElementById("darwin").innerHTML =  multiplicacion 

 nombre1 = document.getElementById("nombre1").value
 cantidad1 = document.getElementById("cantidad1").value
 precio1 = document.getElementById("precio1").value


 document.getElementById("factura").innerHTML = "<div> total: "+ operacion +"</div>";
 }
   
 function factura(){
   let nombre, cantidad, precio,  cantidad1, precio1

      nombre = document.getElementById("nombre").value
      document.getElementById("factura0").innerHTML = "<div> nombre del produto: "+ nombre+" </div>";

     cantidad = document.getElementById("cantidad").value
     document.getElementById("factura1").innerHTML = "<div> cantidad del produto: "+ cantidad +" </div>"

    precio = document.getElementById("precio").value
     operacion = (cantidad * precio)
     document.getElementById("factura2").innerHTML = "<div> valor de cantidad: "+operacion+"</div>"

    nombre1 = document.getElementById("nombre1").value
     document.getElementById("factura3").innerHTML = "<div> nombre del produto: "+ nombre1+"</div>";

     cantidad1 = document.getElementById("cantidad1").value
     document.getElementById("factura4").innerHTML = "<div> cantidad del produto: "+ cantidad1 +" </div>";

   precio1 = document.getElementById("precio1").value

   operacion1 = (cantidad1 * precio1 )
     document.getElementById("factura5").innerHTML = "<div> precio del produto: "+ operacion1 +" </div>"
     
   
   }
