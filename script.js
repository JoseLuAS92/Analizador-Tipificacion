function analizar(){

let texto =
document
.getElementById("descripcion")
.value
.toLowerCase();

let resultado = "Sin coincidencias";

if(
texto.includes("neurologia") ||
texto.includes("migraña")
){

resultado =
"ESPECIALIDADES MEDICAS > NEUROLOGIA";

}

document
.getElementById("resultado")
.innerHTML =
resultado;

}
