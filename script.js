const inputText=document.querySelector(".input-texto");
const mensaje=document.querySelector(".mensaje");

function btnEncriptar() {
	const textoEncriptado=encriptar(inputText.value);
	mensaje.value=textoEncriptado;
	inputText.value=""; 
}


function encriptar(mensaje) {
	

let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],
["o","ober"],["u","ufat"]];

mensaje=mensaje.toLowerCase();

for(let i=0;i<matrizCodigo.length;i++){

	if(mensaje.includes(matrizCodigo[i][0])){
		mensaje=mensaje.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
	}
}
	return mensaje;
}