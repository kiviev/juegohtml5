https://www.youtube.com/watch?v=E-pDZT4KhYU

Parte 28: El Objeto Texto 

1- creamos el objeto textoRespuesta, que será el que contenga el texto para mostrar cuando se pierda el juego:

// objeto textoRespuesta
var textoRespuesta = {
	contador: -1,
	titulo:'', 
	subtitulo:''
}


aqui creamos varias funciones una es actualizarEstadoJuego()

function actualizarEstadoJuego(){
	if(juego.estado =='jugando' && enemigos.length == 0){
		juego.estado= 'victoria';
		textoRespuesta.titulo ='Derrotaste a los enemigos';
		textoRespuesta.subtitulo="Presiona la tecla R para reiniciar";
		textoRespuesta.contador=0;
	}
	if(textoRespuesta.contador >=0){
		textoRespuesta.contador ++;
	}
}

que sirve para que si se acaban los enemigos se actualicen los atributos de textoRespuesta y se ponga el contador a 0 ( empieza en -1)

despues la funcion dibujaTexto

function dibujaTexto(){
	if(textoRespuesta.contador == -1)return;
	var alpha = textoRespuesta.contador/50.0;
	if (alpha> 1){
		for(var i in enemigos){
			delete enemigos[i];
		}
	}
	ctx.save();
	ctx.globalAlpha=alpha;
	if(juego.estado== 'perdido'){
		ctx.fillStyle='white';
		ctx.font="Bold 40pt Arial";
		ctx.fillText(textoRespuesta.titulo,140,200);
		ctx.font='14pt Arial';
		ctx.fillText(textoRespuesta.subtitulo,190,250);
	}
	if(juego.estado== 'victoria'){
		ctx.fillStyle='white';
		ctx.font="Bold 40pt Arial";
		ctx.fillText(textoRespuesta.titulo,140,200);
		ctx.font='14pt Arial';
		ctx.fillText(textoRespuesta.subtitulo,190,250);
	}
}

 que lo que  hace es primero que si el contador sigue siendo -1 no hace nada,
 -se crea una var alpha que guarda el contador /50 en cada iteracion (esto servirá mas adelante para que el texto haga un efecto fadein)
 -y luego eliminamos todos los enemigos( por si hubiera alguno todavia)
 se salva el contexto y aqui es donde se utiliza alpha con ctx.globalAlpha , que se le iguala a alpha para que vaya apareciendo poco a poco

 - despues, si el estado del juego es perdido se dibuja el texto con el titulo primero, ydespues con el subtitulo (cada uno tiene sus propias caracteristicas)

 - si el estado es victoria hacemos lo mismo

 despues añadimos estas funciones al frameLoop();

 function frameLoop(){
-->	actualizarEstadoJuego();
	moverNave();
	actualizaEnemigos();
	moverDisparos();
	dibujarFondo();
	verificarContacto();
	dibujarEnemigos();
	dibujarDisparosEnemigos()
	moverDisparosEnemigos();
	dibujarDisparos();
-->	dibujaTexto();
	dibujarNave();
}