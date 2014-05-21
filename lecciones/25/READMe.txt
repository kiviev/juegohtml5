https://www.youtube.com/watch?v=LO-tCApmvvQ

Parte 25: Preparar Disparos Enemigos 

Aqui creamos el array para guardar los disparos de los enemigos:

//array para disparos enemigos
var disparosEnemigos=[];

y dos funciones, una para dibujar los disparos:

function dibujarDisparosEnemigos(){
	for(var i in disparosEnemigos){
		var disparo = disparosEnemigos[i];
		ctx.save();
		ctx.fillStyle="yellow";
		ctx.restore();
		ctx.fillRect(disparo.x, disparo.y, disparo.width,disparo.height);

	}
}
que es muy parecida a la de dibujar los enemigos p ej

y otra para mover los disparos y eliminarlos cuando se salgan del canvas que lo que hace es mover 3px en y cada vez que se ejecuta la funcion

function moverDisparosEnemigos(){
	for (var i in disparosEnemigos){
		var disparo = disparosEnemigos[i];
		disparo.y +=3;
	}
	disparosEnemigos=disparosEnemigos.filter(function(disparo){
		return disparo.y<canvas.height;
	});
}


ademas añadimos dibujarDisparosEnemigos() a la funcion frameLoop() para utilizarla cada vez que se ejecute la funcion, que recordemos se ejecuta cada (1000/55)ms



