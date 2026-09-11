function analizar(){

const texto =
document.getElementById("descripcion").value.toLowerCase();

let resultado = "";

if(
texto.includes("neurologia") ||
texto.includes("migraña") ||
texto.includes("cefalea")
){

resultado += `
<div class="card">
<h3>ESPECIALIDADES MÉDICAS > NEUROLOGÍA</h3>
<p>Confianza: 95%</p>
</div>
`;

}

if(
texto.includes("prestador") ||
texto.includes("ips")
){

resultado += `
<div class="card">
<h3>CAMBIO DE PRESTADOR</h3>
<p>Confianza: 85%</p>
</div>
`;

}

if(resultado===""){

resultado = `
<div class="card">
No se encontraron coincidencias.
</div>
`;

}

document.getElementById("resultado").innerHTML = resultado;

}
