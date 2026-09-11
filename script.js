let catalogo = [];

async function cargarCSV() {

    const respuesta =
    await fetch("Tabla Tipificaciones.csv");

    const texto =
    await respuesta.text();

    const filas =
    texto.split("\n");

    catalogo = filas;

    console.log(
        "Filas cargadas:",
        filas.length
    );

}

cargarCSV();

function analizar(){

    const descripcion =
    document
    .getElementById("descripcion")
    .value
    .toUpperCase();

    let coincidencias = [];

    catalogo.forEach(fila => {

        if(!fila)
            return;

        let score = 0;

        const columnas =
        fila.split(";");

        columnas.forEach(columna => {

            const valor =
            columna
            .trim()
            .toUpperCase();

            if(
                valor.length > 4 &&
                descripcion.includes(valor)
            ){

                score++;

            }

        });

        if(score > 0){

            coincidencias.push({

                fila,
                score

            });

        }

    });

    coincidencias.sort(
        (a,b)=>b.score-a.score
    );

    let html = "";

    coincidencias
    .slice(0,5)
    .forEach(c => {

        html += `
        <div class="card">
            <b>Coincidencias:</b>
            ${c.score}

            <br><br>

            ${c.fila}
        </div>
        `;

    });

    if(html===""){

        html = `
        <div class="card">
            No se encontraron
            coincidencias.
        </div>
        `;

    }

    document
    .getElementById("resultado")
    .innerHTML = html;

}
