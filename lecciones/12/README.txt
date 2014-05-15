https://www.youtube.com/watch?v=lPTeyNwBzy8

Parte 12: Objetos JSON 
Aqui vemos como crear objetos tipo JSON y como acceder a ellos

crear objetos:

var tutor={
		nombre:"Paco",
		apellido:"Alba",
		correo:"yo@falbaponce.es"
	};

Acceder a ellos :
//mirar es el parrafo donde ponemos los datos
var mirar= document.getElementById('mirar');
		console.log(tutor.correo);
		mirar.innerHTML=tutor.nombre + " " +tutor['apellido'];//las dos formas de acceder a los atributos del objeto