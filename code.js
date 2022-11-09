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
    
//////////////////////// Validacion 
    let consultaNombre;
    let caracterNN = "!@#$%^&*()+=-[·]\\\';,./{}|\":<>?01234567890";

    function obtenerNombreValido(){
        consultaNombre = prompt("Ingresa tu nombre");
        if((consultaNombre.length < 3) || (consultaNombre == null) || (consultaNombre == undefined) || (consultaNombre == "    ")){
            alert("Por favor ingrese un nombre valido. El texto ingresado es muy corto o está vacio.");
            obtenerNombreValido();
        } else if (consultaNombre.length>=3){
            for ( let i = 0; i < consultaNombre.length; i++ ){ 
                if((caracterNN.indexOf(consultaNombre.charAt(i))!= -1) ){
                    alert("Por favor ingrese un nombre valido. Debe ingresar solo letras.");
                    obtenerNombreValido();
                };
            }   
        } else {
        return consultaNombre;
        };
    };
    obtenerNombreValido();

///////////////////////
    const anioActual = 2022;
    let consultaEdad; 
    function obtenerEdadValida(){
        consultaEdad = (anioActual - (int(prompt("Ingrese el año en que naciste"))));
        if (((consultaEdad) > 100 ) || ((consultaEdad) < 18) ||(isNaN(consultaEdad)) ){
            alert("Por favor ingrese un año válido");
            obtenerEdadValida();
        };
        return consultaEdad;
    };    
    obtenerEdadValida();
/////////////////////////////

/* const consultaCiudad = prompt("Ingresa la ciudad en que vives");*/

    let consultaCiudad;
    function obtenerCiudadValida(){
        consultaCiudad = (prompt("Ingresa la ciudad en que vives"));
        if ((consultaCiudad.length <= 3) || (consultaCiudad === null) || (consultaCiudad === undefined) || (consultaCiudad.length == -1)){
            alert("Por favor ingrese una ciudad válida");
            obtenerCiudadValida();
        };
        return consultaCiudad;
    };    
    obtenerCiudadValida();

/*---------------------------------------*/


    const consultaInteresPorJs = confirm("¿Te interesa Javascript?");
/*---------------------------------------*/

    datosPersona.nombre= consultaNombre;
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
/*-----------------  OK   ---------- CAMBIAR Y Q UNA VEZ Q HAGA CLICK SOLO SE VISUALICE< Y EL NUEVO CLICK NO HAGA NADA ---------*/
let tarjeta;
    let seccionTarjetas = document.querySelector("#fila");

    if ( !seccionTarjetas.classList.contains("tarjetasVistas") ) {
        seccionTarjetas.classList.add("tarjetasVistas");
        listado.forEach(dato => {
            tarjeta =  `<article class="caja">
            <img src="${dato.imgUrl}" alt="" />
            <P>${dato.lenguajes}</P>
            <P>Bimestre: ${dato.bimestre}</P></article>`; 
            seccionTarjetas.innerHTML +=tarjeta;
            materiasBtn.removeEventListener("click", recorrerListadoYRenderizarTarjetas);
        });
    } 
    // else {
    //     seccionTarjetas.classList.remove("tarjetasVistas");
    //     seccionTarjetas.innerHTML=``;
    // } 
};

function alternarColorTema() {
/* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
/*-----------------  OK   -------------------*/
    const sitio =  document.querySelector('#sitio');
    sitio.classList.contains("dark")? sitio.classList.remove("dark") : sitio.classList.add("dark");
};

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
/*-----------------  OK   -------------------*/
const txtSobreMi = document.querySelector('#sobre-mi');
function visualizarSobreMi(){ 
    window.addEventListener("keydown", (e) => {
        if (e.key === "f" || e.key === "F") {
            // txtSobreMi.classList.contains("oculto")? txtSobreMi.classList.remove("oculto"): txtSobreMi.classList.add("oculto");
            txtSobreMi.classList.remove("oculto");
        };
    });
};

visualizarSobreMi();
