alert("Bienvenido a Clothes Commerce")

function genero() {
    seleccion = prompt("Elige tu género \n Masculino(m) \n Femenina (f)")
    if(seleccion.toLowerCase() === "m"){
      alert("sos masculino")
      searchM()      
    }else if(seleccion.toLowerCase() === "f"){
      alert("sos femenino")
      searchF()
    }
    else{
      alert("Género no valido, por favor vuelva a Ingresar")
    }
}

function searchM(){
  
  let busqueda = parseInt(prompt("¿Que deseas buscar?  \n 1 - Remeras \n 2 - Pantalones \n 3 - Zapatillas  \n 4 - Accesorios \n 5 - Salir"))


  while (isNaN(busqueda) || busqueda === ""){
    if (busqueda === 1){
      let remeras_m = parseInt(prompt("Elegiste Remeras, seleccione una opción: \n 1 - Remera Element Summon \n 2 - Elegiste Remera DC Density Zone \n 3 - Elegiste Remera Santa Cruz Chest Assorted"))

      switch(remeras_m){
        case 1:{
          alert("Elegiste: Remera Element Summon");
          break;
        }

        case 2:{
          alert("Elegiste: Remera DC Density Zone");
          break;
        }

        case 3:{
          alert("Elegiste: Remera Santa Cruz Chest Assorted");
          break;
        }

        default:
          alert("Opción NO Válida")
      }

      break;

    }

    if (busqueda === 2){
      let pantalones_m = parseInt(prompt("Elegiste Pantalones, seleccione una opción: \n 1 - Jogging Volcom Plain Melange \n 2 - Jogging Independent Baggy Bauhaus \n 3 - Pantalón Zoo York Bomber "))

      switch (pantalones_m){
        case 1:{
          alert("Elegiste: Jogging Volcom Plain Melange ")
          break;
        }

        case 2:{
          alert("Elegiste: Jogging Independent Baggy Bauhaus")
          break;
        }

        case 3:{
          alert("Elegiste: Pantalón Zoo York Bomber")
          break;
        }

        default:
          alert("Opción NO Válida")
      }
      
      break;

    }

    if (busqueda === 3){
      let zapatillas_m = parseInt(prompt("Elegiste Zapatillas, seleccione una opción: \n 1 - Zapatillas Vans Skate Old Skool LTH Pro \n 2 - Zapatillas DC Manteca SS"))

      switch(zapatillas_m){
        case 1:{
          alert("Elegiste: Zapatillas Vans Skate Old Skool LTH Pro")
          break;
        }

        case 2: {
          alert("Elegiste: Zapatillas DC Manteca SS")
          break;
        }

        default:
          break;

      }

      break;

    }

    if (busqueda === 4){
      let accesorios_m = parseInt(prompt("Elegiste Accesorios, seleccione una opción: \n 1 - Reloj \n 2 - Billetera \n 3 - Gorra \n 4 - Cinturón"))

      switch (accesorios_m) {
        case 1:
          alert("Elegiste: Reloj")
          break;

        case 2:
          alert("Elegiste: Billetera")
          break;

        case 3:
          alert("Elegiste: Gorra")
          break;

        case 4:
          alert("Elegiste: Cinturón")
          break;
      
        default:
          break;
      }

      break;

    }


  }


}

function searchF(){

  let busquedaF = parseInt(prompt("¿Que deseas buscar?  \n 1 - Remeras \n 2 - Pantalones \n 3 - Salir"))

  while (busquedaF !== 3){
    
    if (busquedaF === 1){
      let remeras_f = parseInt(prompt("Elegiste Remeras, seleccione una opción: \n 1 - Remera DC Star Boxy \n 2 - Remera Y Tú Quique? Crop Futbol"))

      switch (remeras_f) {
        case 1:
          alert("Elegiste: Remera DC Star Boxy")
          break;
        
        case 2:
          alert("Elegiste: Remera Y Tú Quique? Crop Futbol")
          break;

        default:
          break;
      }

      break;
    }

    if (busquedaF === 2){
      let pantalones_f = parseInt(prompt("Elegiste Pantalones, seleccione una opción: \n 1 - Jogging Isabel la Católica Graffiti \n 2 - Jogging Isabel La Catolica Rustic Boy \n 3 - Jogging Rip Curl Essential"))

      switch (pantalones_f) {
        case 1:
          alert("Elegiste: Jogging Isabel la Católica Graffiti")
          break;
        
        case 2:
          alert("Elegiste: Jogging Isabel La Catolica Rustic Boy")

        case 3:
          alert("Elegiste: Jogging Rip Curl Essential")
        
        default:
          break;
      }

      break;
    }

    
  }

}

genero()


