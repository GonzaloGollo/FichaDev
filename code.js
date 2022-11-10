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
    let ingresoErroneo = false;
    /* ---------------  Nombre  --------------- */
    let consultaNombre;
    const caracterNN = "!@#$%^&*()+=-[·]\\\';,./{}|\":<>?01234567890";
    do {
        consultaNombre = prompt("Ingresa tu nombre");
        for ( let i = 0; i < consultaNombre.length; i++ ){ 
            if (( caracterNN.indexOf( consultaNombre.charAt(i) )!= -1) ){ 
                alert("Por favor ingrese un nombre valido. Debe ingresar solo letras.");
                ingresoErroneo = true;
            };
        };
    } while (( consultaNombre.length < 2 ) || ( consultaNombre === null ) || ( consultaNombre === undefined ) || ( consultaNombre.includes("  ")== true ) || ( ingresoErroneo === true ));

    /* ---------------  AÑO  --------------- */
    const fechaActual = new Date();
    const anioActual = fechaActual.getUTCFullYear();
    let consultaEdad; 
    do {
        consultaEdad = (anioActual - ( parseInt( prompt( "Ingrese el año en que naciste." ) ) ));
        if ( ( (consultaEdad) > 100 ) || ( (consultaEdad) < 18 ) ||( isNaN(consultaEdad) ) ){ 
            alert("Por favor ingrese un año válido");
            ingresoErroneo = true;
        };
    } while ( ingresoErroneo === true );

    /* ---------------  Ciudad  --------------- */
    let consultaCiudad;
    do {
        consultaCiudad = prompt("Ingresa la ciudad en que vives");
        for ( let i = 0; i < consultaCiudad.length; i++ ){ 
            if (( caracterNN.indexOf( consultaCiudad.charAt(i) )!= -1) ){ 
                alert("Por favor ingrese un nombre de Ciudad válido. Debe ingresar solo letras.");
                ingresoErroneo = true;
            };
        };
    } while (( consultaCiudad.length < 2 ) || ( consultaCiudad === null ) || ( consultaCiudad === undefined ) || ( consultaCiudad.includes("  ")== true ) || ( ingresoErroneo === true ));

    /*-----------------  InteresPorJs  ----------------------*/
    const consultaInteresPorJs = confirm("¿Te interesa Javascript?");

    /*----------------  Asignaciones de dato y correccion de formato str  -----------------*/
    const txtStandarizado = (texto) => {
        texto = texto.toLowerCase();
        texto = texto.split(" ");
        let array = [];
        for (let i = 0; i < texto.length; i++) {
            texto[i] !="" ? array.push((texto[i][0].toUpperCase() + texto[i].substring(1))) : "";
        };
        return array.join(" ");
    };

    datosPersona.nombre = txtStandarizado(consultaNombre);
    datosPersona.edad = consultaEdad;
    datosPersona.ciudad = txtStandarizado(consultaCiudad);
    datosPersona.interesPorJs = consultaInteresPorJs;
};

function renderizarDatosUsuario() {
/* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
    obtenerDatosDelUsuario();
/* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
    document.querySelector("#nombre").innerHTML= `${datosPersona.nombre}` ;
    document.querySelector("#edad").innerHTML= `${datosPersona.edad}` ;
    document.querySelector("#ciudad").innerHTML= `${datosPersona.ciudad}` ;
    document.querySelector("#javascript").innerHTML= `${datosPersona.interesPorJs? "Sí":"No"}` ;
};

function recorrerListadoYRenderizarTarjetas() {
/* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
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
    };
};

function alternarColorTema() {
/* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
    const sitio =  document.querySelector('#sitio');
    sitio.classList.contains("dark")? sitio.classList.remove("dark") : sitio.classList.add("dark");
};

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
const txtSobreMi = document.querySelector('#sobre-mi');
function visualizarSobreMi(){ 
    window.addEventListener("keydown", (e) => {
        (e.key === "f" || e.key === "F")? txtSobreMi.classList.remove("oculto"):"";
    });
};
visualizarSobreMi();