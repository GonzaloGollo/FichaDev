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
    const anioActual = 2022;
    //////////////////////// Validacion 
    let nombre;
    let caracterNN = "!@#$%^&*()+=-[·]\\\';,./{}|\":<>?01234567890";

    function obtenerNombreValido(){
        nombre = prompt("Ingresa tu nombre");
        console.log(nombre);
        for ( let i = 0; i < nombre.length; i++ ){ 
            if ((caracterNN.indexOf(nombre.charAt(i))!= -1) || (nombre.length <= 3) || (nombre === null) || (nombre === undefined) || (nombre ==="")){
                alert("Por favor ingrese un nombre valido");
                obtenerNombreValido();
                console.log(nombre);
            }; 
        };
        return nombre;
    };    
    obtenerNombreValido();
    ///////////////////////
    let consultaEdad;
    function obtenerEdadValida(){
        consultaEdad = (anioActual - (prompt("Ingrese el año en que naciste")));
        if (((consultaEdad) > 100 ) || ((consultaEdad) < 18)){
            alert("Por favor ingrese un año válido");
            obtenerEdadValida();
        } 
        return consultaEdad;
    };    
    obtenerEdadValida();
    /////////////////////////////

    const consultaCiudad = prompt("Ingresa la ciudad en que vives");

    /////////////////////

    const consultaInteresPorJs = confirm("¿Te interesa Javascript?");
    

    datosPersona.nombre= nombre;
    datosPersona.edad= consultaEdad;
    datosPersona.ciudad= consultaCiudad;
    datosPersona.interesPorJs= consultaInteresPorJs;
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.querySelector("#nombre").innerHTML= `${datosPersona.nombre}` ;
  document.querySelector("#edad").innerHTML= `${datosPersona.edad}` ;
  document.querySelector("#ciudad").innerHTML= `${datosPersona.ciudad}` ;
  document.querySelector("#javascript").innerHTML= `${datosPersona.interesPorJs? "Sí":"No"}` ;
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
    let tarjeta;
    let seccionTarjetas = document.querySelector("#fila");

    listado.forEach(dato => {
        tarjeta =  `<article class="caja">
        <img src="${dato.imgUrl}" alt="" />
        <P>${dato.lenguajes}</P>
        <P>Bimestre: ${dato.bimestre}</P></article>`; 
        seccionTarjetas.innerHTML +=tarjeta;
    });
  return tarjeta;
};


function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
    const body =  document.querySelector('body');
    const developer = document.querySelector('#developer');
 
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        developer.classList.remove("dark");
        } else {
            body.classList.add("dark");
            developer.classList.add("dark");
    };
};

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
const txtSobreMi = document.querySelector('#sobre-mi');

function visualizarSobreMi(){ 
window.addEventListener("keydown", (e) => {
    if (e.key === "f" || e.key === "F") {
        txtSobreMi.classList.contains("oculto")? txtSobreMi.classList.remove("oculto"): txtSobreMi.classList.add("oculto");
        };
    });
};

visualizarSobreMi();
