https://www.youtube.com/watch?v=w8xt6BB966E

Parte 29: Perdiste (objeto texto)

Aqui tendremos que ver si hay contacto con la nave y si lo hay mostrar en canvas perdiste o ganaste si ganas

para ello al objeto nave le añadimos un contador que empieza en 0
posteriormente vamos a la funcion moverNave() y al final le añadimos esto:

if(nave.estado=='hit'){
		nave.contador++;
		if(nave.contador >=20){
			nave.contador=0;
			nave.estado='muerto';
			juego.estado='perdido';
			textoRespuesta.titulo='Game Over';
			textoRespuesta.subtitulo='Presiona tecla R para continuar';
			textoRespuesta.contador=0;
		}
	}

	Que lo que hace es que si el estado de la nave es hit, primero al contador de la nave le sume 1
	y dentro otro if que si el contador es > de 20 cambie el contador de la nave a 0 y el estado a muerto, ademas al estado del juego le ponemos perdido, y modificamos el textoRespuesta titulo, subtitulo y al contador le ponemos 0