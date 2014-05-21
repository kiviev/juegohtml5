https://www.youtube.com/watch?v=fWdeA7RLP0c

Parte 23: Lógica de Colisiones

aqui solo creamos la funcion de la logica de las colisiones que es booleana y le pasamos dos objetos, devuelve true cuando hay colision, es la siguiente:

function hit(a , b){
	var hit=false;

	if(b.x + b.width >= a.x && b.x < a.x + a.width){
		if( b.y + b.height >= a.y && b.y < a.y + a.height){
			hit=true;
		}
	}
	if(b.x <= a.x && b.x + b.width >= a.x + a.width){
		if(b.y <= a.y && b.y + b.width >= a.y + a.height){
			hit=true;
		}
	}
	if(a.x <= b.x && a.x + a.width >= b.x + b.width){
		if(a.y <= b.y && a.y + a.width >= b.y + b.height){
			hit=true;
		}
	}
	return hit;
}