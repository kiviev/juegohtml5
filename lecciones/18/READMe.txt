https://www.youtube.com/watch?v=JORxRP9hR3s


Parte 18: Disparos (1/2) 

En esta parte no se ve nada en el juego todavia, sin embargo lo que haremos sera preparar las funciones necesarias para los disparos y crear un array en una variable global para almacenar los disparos que habamos

1-
//array para los disparos

var disparos=[];

2- funcion para crear el disparo se llama fire() y lo que hace es en el array disparos poner un nuevo disparo cada vez que se ejecuta en el array disparos con disparos.push(), dentro de esta ultima le definimos las caracteristicas de cada disparo en JSON
x es la posicion de la nave en x menos 20 para que salga el disparo desde el centro de la nave
y es la posicion de la nave - en y -10 para que salga el disparo un poco por encima de la nave

function fire(){
	disparos.push({
		x: nave.x -20,
		y: nave.y -10,
		width: 10,
		height: 30
	})
}

3- funcion moverDisparos() que lo que hace es recorrer el array disparos, y en cada iteracion creamos una variable disparo que hace referencia a cada disparo almacenado, posteriormente lo que hacemos es filtrar los elementos dentro del array disparos con  disparos.filter() que dentro lleva una funcion que se le pasa como parametro la variable disparo y que si la posicion y de el disparo es mayor de 0 la devuelve, y filter la elimina.   Esto se hace para que cuando se salgan los disparos del canvas se borren, ya que si no seguirian almacenandose y seria un gasto enorme de memoria

function moverDisparos(){
	for(var i  in disparos){
		var disparo = disparos[i];
		disparo.y -= 2;
	}
	disparos = disparos.filter(function(disparo){
		return disparo.y > 0;
	});
}
	

