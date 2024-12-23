const seleccionCampeon = document.querySelector("#seleccionCampeon")

const estado = {
    campeonSeleccionado: null,
    oro: 10000,
    estadisticas: [
        {nombre: "regeneracion_vida",
            img: "./assets/stats/regeneracion-recursos.png",
            tipoDeCalculo: "SUMATORIA"
        },
        {nombre: "poder_curaciones_y_escudos",
            img: "./assets/stats/poder-curaciones-escudos.png",
            tipoDeCalculo: "SUMATORIA"
        },
        {nombre: "letalidad",
            img: "./assets/stats/penetracion-armadura.png",
            tipoDeCalculo: "SUMATORIA"
        },
        {nombre: "penetracion_de_magia",
            img: "./assets/stats/penetracion-de-magia.png",
            tipoDeCalculo: "SUMATORIA"
        },
        {nombre: "penetracion_de_armadura",
            img: "./assets/stats/penetracion-armadura.png",
            tipoDeCalculo: "SUMATORIA"
        },
        {nombre: "robo_de_vida",
            img: "./assets/stats/robo-de-vida.png",
            tipoDeCalculo: "SUMATORIA"
        },
        {nombre: "omnivampirismo",
            img: "./assets/stats/omnivampirismo.png",
            tipoDeCalculo: "SUMATORIA"
        },
        {nombre: "alcance_de_ataque",
            img: "./assets/stats/alcance-de-ataque.png",
            tipoDeCalculo: "SUMATORIA"
        },
        {nombre: "tenacidad",
            img: "./assets/stats/tenacidad.png",
            tipoDeCalculo: "SUMATORIA"
        },
        {nombre: "dmg_AD",
            img: "./assets/stats/AD.png",
            tipoDeCalculo: "SUMATORIA"
        },
        {nombre: "dmg_AP",
            img: "./assets/stats/AP.png",
            tipoDeCalculo: "SUMATORIA"
        },
        {nombre: "armadura",
            img: "./assets/stats/armadura.png",
            tipoDeCalculo: "SUMATORIA"
        },
        {nombre: "resistencia_magica",
            img: "./assets/stats/resistencia-magica.png",
            tipoDeCalculo: "SUMATORIA"
        },
        {nombre: "velocidad_ataque",
            img: "./assets/stats/velocidad-de-ataque.png",
            tipoDeCalculo: "PORCENTUAL"
        },
        {nombre: "aceleracion_habilidad",
            img: "./assets/stats/aceleracion-habilidad.png",
            tipoDeCalculo: "SUMATORIA"
        },
        {nombre: "golpe_critico",
            img: "./assets/stats/critico.png",
            tipoDeCalculo: "SUMATORIA"
        },
        {nombre: "velocidad_movimiento",
            img: "./assets/stats/velocidad-movimiento.png",
            tipoDeCalculo: "SUMATORIA"
        }
    ],
    inventario:[
        {posicion: 1,
            item: "ninguno",
        },
        {posicion: 2,
            item: "ninguno",    
        },
        {posicion: 3,
            item: "ninguno",
        },
        {posicion: 4,
            item: "ninguno",
        },
        {posicion: 5,
            item: "ninguno",    
        },
        {posicion: 6,
            item: "ninguno",
        },
        {posicion: 7,
            item: "ninguno",
        }
    ]
}


function actualizarEstado(clave, valor) { estado[clave] = valor;}

const cargarData = async() => {
    try{
        const response = await fetch("./data.json", {
            method:"GET"
        })
        const data = await response.json() //la data
        itemsDisponibles = data.itemsDisponibles //asi accedo al array
    }catch(error){
        Swal.fire({
            title: 'Error!',
            text: 'Error de carga de datos. Intenta recargar la página',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    }
}
cargarData();
//Datos 
const campeones = [
    {nombre:"Dr. Mundo",
        video: "PENDIENTE",
        image: "./assets/dr.mundo-profile.png",
        id: 1,
        rol_usual: "Top",
        vida: 623,
        tipo_de_recurso:{
            nombre: "ninguno",
        },
        estadisticas : {
            "regeneracion_vida":{
                valor: 9
            },
            "poder_curaciones_y_escudos":{
                valor: 0
            },
            "letalidad":{
                valor: 0
            },
            "penetracion_de_magia":{
                valor: 0
            },
            "penetracion_de_armadura":{
                valor: 0
            },
            "robo_de_vida":{
                valor: 0
            },
            "omnivampirismo":{
                valor: 0
            },
            "alcance_de_ataque":{
                valor: 125
            },
            "tenacidad":{
                valor: 0
            },
            "dmg_AD":{
                valor: 68
            },
            "dmg_AP":{
                valor: 0
            },
            "armadura":{
                valor: 32
            },    
            "resistencia_magica":{
                valor: 29
            },
            "velocidad_ataque":{
                valor: 0.73
            },
            "aceleracion_habilidad":{
                valor: 0
            },
            "golpe_critico":{
                valor: 0
            },
            "velocidad_movimiento":{
                valor: 345
            }
        }
    },
    {nombre: "Karthus",
        video: "PENDIENTE",
        image: "./assets/karthus-profile.png",
        id: 2,
        rol_usual: "Mid, Jg",  
        vida: 630,
        tipo_de_recurso:{
            nombre: "mana",
            cantidad: 467,
            regeneracion_mana: 8,
        },
        estadisticas : {
            "regeneracion_vida":{
                valor: 9
            },
            "poder_curaciones_y_escudos":{
                valor: 0
            },
            "letalidad":{
                valor: 0
            },
            "penetracion_de_magia":{
                valor: 0
            },
            "penetracion_de_armadura":{
                valor: 0
            },
            "robo_de_vida":{
                valor: 0
            },
            "omnivampirismo":{
                valor: 0
            },
            "alcance_de_ataque":{
                valor: 125
            },
            "tenacidad":{
                valor: 0
            },
            "dmg_AD":{
                valor: 68
            },
            "dmg_AP":{
                valor: 0
            },
            "armadura":{
                valor: 32
            },    
            "resistencia_magica":{
                valor: 29
            },
            "velocidad_ataque":{
                valor: 0.73
            },
            "aceleracion_habilidad":{
                valor: 0
            },
            "golpe_critico":{
                valor: 0
            },
            "velocidad_movimiento":{
                valor: 345
            }
        }
    },
    {nombre: "Samira",
        video: "PENDIENTE",
        image: "./assets/samira-profile.png",
        id: 3,
        rol_usual: "Bot",
        vida: 600,
        tipo_de_recurso:{
            nombre: "ninguno",
        },
        estadisticas : {
            "regeneracion_vida":{
                valor: 9
            },
            "poder_curaciones_y_escudos":{
                valor: 0
            },
            "letalidad":{
                valor: 0
            },
            "penetracion_de_magia":{
                valor: 0
            },
            "penetracion_de_armadura":{
                valor: 0
            },
            "robo_de_vida":{
                valor: 0
            },
            "omnivampirismo":{
                valor: 0
            },
            "alcance_de_ataque":{
                valor: 125
            },
            "tenacidad":{
                valor: 0
            },
            "dmg_AD":{
                valor: 68
            },
            "dmg_AP":{
                valor: 0
            },
            "armadura":{
                valor: 32
            },    
            "resistencia_magica":{
                valor: 29
            },
            "velocidad_ataque":{
                valor: 0.73
            },
            "aceleracion_habilidad":{
                valor: 0
            },
            "golpe_critico":{
                valor: 0
            },
            "velocidad_movimiento":{
                valor: 345
            }
        }
    }
]
let itemsDisponibles = []
const tiposDeCalculo = {
    "SUMATORIA" : {
        "nombre" : "Sumatoria",
        "formula" : (valorEstadisticaCampeon, valorEstadisticaItem) => {
            return valorEstadisticaCampeon + valorEstadisticaItem
        }
    },
    "PORCENTUAL" : {
        "nombre" : "Porcentual",
        "formula" : (valorEstadisticaCampeon, valorEstadisticaItem) => {
            const resultado = valorEstadisticaCampeon + (valorEstadisticaCampeon * valorEstadisticaItem) / 100;
            return Math.round(resultado * 100) / 100;
        }
    }
    
}

//Funciones de renderizado HTML

const renderizarHUD = (campeon)=>{
    return `
        <div class="estadisticas">
            <div class="cuadros-estadisticas">${
                estado.estadisticas.map(estadistica  => 
                {
                    
                    return `
                        <div class="estadistica" title="${estadistica.nombre}">
                            <img src="${estadistica.img}" alt="${estadistica.nombre}">
                            <span>${campeon.estadisticas[estadistica.nombre].valor}</span>
                        </div>
                    `
                }
                ).join('')
            }</div>
            
            <div class="campeon-img">
                <img src="${campeon.image}" alt="campeon">
            </div>
            
            <div class="vida-mana">
                <div class="vida" title="Vida"><span>${campeon.vida}</span></div>
                <div class="mana" title="Maná">
                    ${campeon.tipo_de_recurso.nombre === "mana"
                    ?`<span>${campeon.tipo_de_recurso.cantidad}</span>`
                    :`<span>-</span>`
                    }
                </div>
            </div>
        </div>
    `
}

const renderizarInventarioHTML = (inventario) => {
    return `
        <div class="inventario">
                <div class="items">
                    ${inventario.map((posicion) => {
                        if (posicion.item == "ninguno"){
                            return `<div class="item"></div>`
                        }else{
                            return `<div class="item" style="background-image: url(${posicion.item.url})"></div>`
                        }
                    }).join('')}
                </div>
                <div class="oro">
                    <img src="./assets/gold.png" alt="oro">
                    <p id="oro"> ${estado.oro}</p>
                </div>
        </div>
    `
}

/* Pasar los estilos a css */

const renderizarInterfazCampeonSeleccionado = (campeon, inventario, itemsDisponibles) => {
    seleccionCampeon.innerHTML = `
    <div class="volver-btn">
        <button id="volver">Volver</button>
    </div>
    <div>
        <div class="campeon_seleccionado">
            ${renderizarHUD(campeon)}
            ${renderizarInventarioHTML(inventario)}
        </div>
    </div>
    `

    renderizarTiendaHTML(itemsDisponibles)
    document.getElementById("volver").addEventListener("click", () => {
        localStorage.setItem("campeonSeleccionado", "");
        renderizarListaCampeones(campeones);
    });
}

const agregarAlInventario = (itemID) => { 
    const item = itemsDisponibles.find(item => item.id === +itemID);
    //Si item es trully y tiene oro suficiente
    if(item && estado.oro > item.precio){
        if (item.tipo === "ward") {
            estado.inventario[3].item = item;
        }else{
            const posicionVacia = estado.inventario.find(inventarioItem => inventarioItem.item === "ninguno") //verificamos si la posición está o no vacia
            if(posicionVacia){//si la posición está vacía
                posicionVacia.item = item;
                estado.oro = estado.oro - item.precio;
                if (item.recursos) {
                    if (item.recursos.vida) {
                        estado.campeonSeleccionado.vida += item.recursos.vida; // Suma el bono de vida
                    }
                    if (item.recursos.mana) {
                        estado.campeonSeleccionado.tipo_de_recurso.cantidad += item.recursos.mana; // Suma el bono de mana
                    }
                }

                for (let estadistica in item.estadisticas){
                    const nombreEstadistica = estadistica;
                    const tipoDeCalculo = estado.estadisticas.find(stat => stat.nombre === nombreEstadistica).tipoDeCalculo;
                    estado.campeonSeleccionado.estadisticas[estadistica].valor = tiposDeCalculo[tipoDeCalculo].formula(
                        estado.campeonSeleccionado.estadisticas[estadistica].valor ,  item.estadisticas[estadistica]
                    )
                }
            }
            else{
                Swal.fire({
                    title: 'Error!',
                    text: 'No hay espacio disponible en el inventario',
                    icon: 'info',
                    confirmButtonText: 'Ok'
                })
            }
        }
    }
    else{
        Swal.fire({
            title: 'Error!',
            text: 'No hay oro suficiente para comprar este item',
            icon: 'info',
            confirmButtonText: 'Ok'
        })
    }
    renderizarInterfazCampeonSeleccionado(estado.campeonSeleccionado, estado.inventario, itemsDisponibles)
}

const renderizarListaCampeones = (campeones) => {
    seleccionCampeon.innerHTML = 
        `   <h2 class="titulo-seleccion">Haz doble click sobre un campeón para seleccionarlo</h2>
            <div class="lista-de-campeones">
                ${
                    campeones.map(campeon  => 
                        `
                            <div class="campeon-img" id="${campeon.id}" onclick="seleccionarCampeon(${campeon.id})" >
                                <img src="${campeon.image}" alt="">
                            </div>
                        `
                    ).join('')
                }
            </div>
        `
}

const seleccionarCampeon = (id) =>{
    actualizarEstado("campeonSeleccionado", campeones.find(campeon => campeon.id === id));
    renderizarInterfazCampeonSeleccionado(estado.campeonSeleccionado, estado.inventario, itemsDisponibles)

}


renderizarListaCampeones(campeones);

/* Tienda */

const obtenerTienda = (items)=>{
    const tienda = [
        {tipo: "Ward",
        items: items.filter(item => item.tipo === "ward")
        },
        {tipo: "Normales",
        items: items.filter(item => item.tipo === "normal")
        }
    ]
    return tienda
}

const tienda = document.getElementById('tienda');
const wardSection = document.getElementById('wards');
const itemsSection = document.getElementById('itemsNormales');
tienda.style.display = 'none';
const renderizarTiendaHTML = (items) => {
    const tiendaOrganizada = obtenerTienda(items)
    let categoriasTiendaHTML = ""
    for (let tipoItem of tiendaOrganizada) {
        categoriasTiendaHTML += `
        <div class="categoria">
            <h2>${tipoItem.tipo}</h2>
            ${tipoItem.items.map(item => `
                <img class="item-img" src="${item.url}"  ondblclick="agregarAlInventario(${item.id})">
            `).join('')}
        </div>
        `
    }

    tienda.innerHTML = `${categoriasTiendaHTML}`
};

document.addEventListener('keydown', function(event) {
    if (event.key === "p" || event.key === "P") {
        tienda.style.display === 'none'
        ? tienda.style.display = 'block'
        : tienda.style.display = 'none'
    }
});  