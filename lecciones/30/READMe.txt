https://www.youtube.com/watch?v=jtx_DVFKY-w

Parte 30: Programar "Game Over"

Para esto ultimo hay que añadir pocas lineas mas, tan solo en la funcion actualizarEstadoJuego() hay que añadir:

if((juego.estado=='perdido' || juego.estado =='victoria') && teclado[82]){
		juego.estado='iniciando';
		nave.estado='vivo';
		textoRespuesta.contador=-1;
	}

Que lo que hace es que si el estado de juego es perdio o victoria(o sea se ha terminado el juego) y  ademas se pulsa la tecla del teclado 82 que es la r:
el estado del juego pasa a se r iniciando
el estado de la nave a vivo y el contador de textoRespuesta = -1 ( para que no dibuje nada mientras este asi) y con eso ya se reinicia el juego cuando se termine	