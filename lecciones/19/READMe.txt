
https://www.youtube.com/watch?v=f-8g0TSr-QU


Parte 19: Disparos (2/2)

Aqui terminamos con los disparos
creamos la funcion dibujarDisparos() que hace lo siguiente:
1 salva el contexto
2 declara el color del cuadrado que haremos despues (blanco)
3 recorre el array disparos, iguala cada item con una variable y despues dibuja el rectangulo con las caracteristicas de cada disparo
4 al final restaura el contexto

despues ejecutamos la funcion en frameLoop despues de dibujarFondo()

Y ahora hay que vincularlo con una tecla (la del espacio que su keyCode es 32)

dentro de la funcion moverNave añadimos esto:

//disparos
	if(teclado[32]){
		if(!teclado.fire){
			fire();
			teclado.fire=true;
		}
		
	}else{teclado.fire = false}

Esto lo que hace es añadir el evento a la tecla espacio, y le decimos que si no teclado.fire ( o sea que si no hay propiadad tecldo fire 1- ejecuta la funcion fire() y despues crea teclado.fire y la pone en true) y en caso contrario ponga teclado.fire en falso, esto hace que solo se dispare cuando se pulsa la tecla, y no cuando se mantiene presionada