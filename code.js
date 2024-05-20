/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  
  const anioActual = 2024;
  let nombreValido = false;
  const letras = /^[a-zA-Z\s]+$/;
  let datoNombre = prompt("Ingresa tu nombre").trim();

    do{
      if (letras.test(datoNombre)) {
        if (datoNombre.length > 3) {
          nombreValido = true;
        } else {
          datoNombre = prompt("El nombre ingresado debe contener 4 o más letras.");
        }
      } else {
        if (datoNombre.length > 3) {
          datoNombre = prompt("El nombre ingresado debe contener solo letras.");
        } else {
          datoNombre = prompt("El nombre ingresado debe contener 4 o más letras.");
        }
      }  
    } while (!nombreValido);  

  const numeros = /^[0-9]+$/;
  let edadValida = false;
  datoEdad = prompt("Ingresa el año en que naciste").trim();

   do{
    if (numeros.test(datoEdad)) {
      if (datoEdad.length == 4) {
        edadValida = true;
      } else {
        datoEdad = prompt("El año debe tener 4 digitos... ejemplo 2024");
      }
    } else {
      datoEdad = prompt("El año ingresado debe tener solo números")
    }
   } while (!edadValidad)


    datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");
    datosPersona.interesPorJs = confirm("¿Te interesa Javascript?");
    
  

}

function calcularEdad(anioDeNacimiento){
  let anioActual = new Date().getFullYear();
  edad = anioActual - parseInt(datosPersona.anioDeNacimiento);

}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

  let datos = document.querySelector(".card-header");

  const nombreSpan = document.querySelector("#nombre");
  const edadSpan = document.querySelector("edad");
  const ciudadSpan = document.querySelector("#ciudad");
  const javascriptSpan = document.querySelector("#javascript")

  
}



renderizarDatosUsuario(datosPersona);

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  


}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 
  


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

