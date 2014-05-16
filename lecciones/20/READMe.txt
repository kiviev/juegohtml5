https://www.youtube.com/watch?v=wH1l8N_sX7s

Parte 20: El Objeto del Juego y preparar Enemigos 

Aqui solo hemos hecho 3 cosas:

1- crear el objeto JSON juego que por ahora solo tendrá como atributo estado

//crear objeto juego
var juego={
	estado:'iniciando'
}

2- crear el array enemigos[]

//crear el array enemigos
var enemigos=[];

3 -crear una funcion para dibujarEnemigos()
que lo que hace es recorrer el array enemigos, en cada iteracion crea una variable enemigo y la iguala a el enemigo almacenado en enemigos[i], se salva el contexto y despues si el estado de enemigo es vivo lo coloreara de color rojo, y si esta muerto de color negro ( todavia no hemos creado el objeto enemigo, pero uno de sus atributos sera estado)
despues se dibuja el enemigo con sus atributos y se restaura el contexto

function dibujarEnemigos(){
	for(var i in enemigos){
		var enemigo= enemigos[i];
		ctx.save();
		if (enemigo.estado='vivo'){ctx.fillStyle='red';}
		if(enemigo.estado = 'muerto'){ctx.fillStyle='black';}
		ctx.fillRect(enemigo.x,enemigo.y,enemigo.width,enemigo.height);
		ctx.restore();
	}
}