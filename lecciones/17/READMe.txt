https://www.youtube.com/watch?v=4TT0KLW1raA

Parte 17: Mover la Nave 

Aqui vamos a crear la funcion para mover la nave solo en horizintal

esta es la funcion que será llamada despues dentro de frameLoop() y antes de dibujarFondo(), para quecada vez que se ejecute esta funcion se ejecute tambien moverNave

function moverNave(){
	//movimiento a la izquierda
	if(teclado[37]){
		nave.x -=6;
		if(nave.x < 0){nave.x=0;}
	}
	//movimiento a la derecha
	if(teclado[39]){
		var limite = canvas.width - nave.width;
		nave.x +=6;
		if(nave.x > limite){nave.x= limite;}
	}
}
esta funcio lo que hace es:
si teclado[37] (es el keycode de la tecla de la izquierda) se pulsa lo primero es que la posicion de la nave en x sera 6 veces menor y tambien se comprueba que no se salga del limite de la izquierda diciendole que si nave.x es menor de 0 que nave.x sea0, adi no se puede salir del espacio por la izquierda
en el siguiente apartado
si teclado[39] (keyCode de tecla derecha) es pulsado
1- se crea una variable limite que sera el ancho del canvas menos el ancho de la nave
y despues si nave.x es mayor que el limite pues nave x es igual al limite, asi no se puede salir del espacio por la derecha