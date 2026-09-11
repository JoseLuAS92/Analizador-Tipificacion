function analizar(){

const texto =
document
.getElementById("descripcion")
.value
.toLowerCase();

let resultados=[];

if(
texto.includes("neurologia") ||
texto.includes("migraña") ||
texto.includes("cefalea")
){

resultados.push({
nombre:"ESPECIALIDADES MÉDICAS > NEUROLOGÍA",
puntaje:95
});

}

if(
texto.includes("cardiologia") ||
texto.includes("hipertension")
){

resultados.push({
nombre:"ESPECIALIDADES MÉDICAS > CARDIOLOGÍA",
puntaje:90
});

}

if(
texto.includes("medicamento") ||
texto.includes("farmacia") ||
texto.includes("entrega")
){

resultados.push({
nombre:"MEDICAMENTOS",
puntaje:90
});

}

if(
texto.includes("prestador") ||
texto.includes("ips")
){

resultados.push({
nombre:"CAMBIO DE PRESTADOR",
puntaje:85
});

}

if(resultados.length===0){

document.getElementById("resultado").innerHTML=
`
<div class="card">
No se encontraron coincidencias.
</div>
`;

return;

}

resultados.sort((a,b)=>b.puntaje-a.puntaje);

document.getElementById("resultado").innerHTML=

resultados.map(r=>`

<div class="card">

<h3>${r.nombre}</h3>

<div class="puntaje">
Confianza: ${r.puntaje}%
</div>

</div>

`).join("");

}
