/**
 * 
 */
//objetos importantes de canvas
var canvas= document.getElementById('game');
var ctx= canvas.getContext('2d');

//Crear el objeto de la nave
var nave={
	x:100,
	y: canvas.height -100,
	width: 50,
	height: 50
}
var declado ={}
//Definir variables para las imagenes
var fondo;

//Definicion de funciones
function loadMedia(){
	fondo = new Image();
	fondo.src='img/fondo.jpg';
	fondo.onload=function(){
		var intervalo= window.setInterval(frameLoop,1000/55);
	}

}
function dibujarFondo(){
	ctx.drawImage(fondo,0,0);
}
function dibujarNave(){
	ctx.save();
	ctx.fillStyle='white';
	ctx.fillRect(nave.x,nave.y,nave.width,nave.height);
	ctx.restore();
}

function agregarEventosTeclado(){
	agregarEvento(document,'keydown',function(e){
		//ponemos en true la tecla presionada
		teclado[e.keyCode] = true;
	})
	agregarEvento(document,'keyup',function(e){
		//ponemos en false la tecla que dejo de ser presionada
		teclado[e.keyCode] = false;
	})
	

	function agregarEvento(elemento,nombreEvento,funcion){
		if(elemento.addEventListener){
			//resto de navegadores
			elemento.addEventListener(nombreEvento,funcion,false);
		}else if(evento.attachEvent){
			//solo par InternetExplorer
			evento.attachEvent(nombreEvento,funcion);
		}
	}
}
function frameLoop(){
	dibujarFondo();
	dibujarNave();
}
//Ejecucion de funciones

agregarEventosTeclado();
loadMedia();


























/*window.addEventListener('load',init);

	function init(){
		
		var canvas= document.getElementById('game');
		var ctx= canvas.getContext('2d');

		
	}
	*/