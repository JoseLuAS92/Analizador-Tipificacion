let catalogo = [];

fetch("tipificaciones.json")
.then(respuesta => respuesta.json())
.then(datos => {

    catalogo = datos;

    console.log("Tipificaciones cargadas:", catalogo);

});

function analizar(){

    const texto =
    document.getElementById("descripcion")
    .value
    .toLowerCase();

    let resultados = [];

    catalogo.forEach(item => {

        let score = 0;

        item.keywords.forEach(keyword => {

            if(texto.includes(keyword.toLowerCase())){

                score++;

            }

        });

        if(score > 0){

            resultados.push({

                ...item,
                score

            });

        }

    });

    resultados.sort(
        (a,b) => b.score - a.score
    );

    mostrarResultados(
        resultados.slice(0,3)
    );

}

function mostrarResultados(resultados){

    const contenedor =
    document.getElementById("resultado");

    if(resultados.length === 0){

        contenedor.innerHTML = `
        <div class="card">
            No se encontraron coincidencias.
        </div>
        `;

        return;

    }

    contenedor.innerHTML = resultados.map(r => `

        <div class="card">

            <h3>${r.nombre}</h3>

            <p><b>Macromotivo:</b> ${r.macromotivo}</p>

            <p><b>Motivo General:</b> ${r.motivoGeneral}</p>

            <p><b>Tipo:</b> ${r.tipo}</p>

            <p><b>Subtipo:</b> ${r.subtipo}</p>

            <p><b>Coincidencias:</b> ${r.score}</p>

        </div>

    `).join("");

}
