https://www.youtube.com/watch?v=5v1kpJUySd4


Parte 26: Mover Disparos Enemigos

En esta ocasion vamos a crear y mover los disparos de los enemigos, hara falta una funcion para conseguir un numero aleatorio de entre un numero inferior y un numero superior, y esto se consigue con esta funcion:

function aleatorio(inferior,superior){
	var diferencia= superior-inferior;
	 return Math.floor((Math.random()* diferencia)+inferior);	
}

dentro de la funcion actualizaEnemigos() creamos otra que se va a llamar agregarDisparosEnemigos(enemigo) y le pasamos como parametro enemigo, y lo que tiene que hacer es devolver un objetoJSON con los atributos de los disparos, x , y , height, width y un contador, es esta:

function agregarDisparosEnemigos(enemigo){
		return{
			x: enemigo.x+20,
			y: enemigo.y+20,
			width: 10,
			height: 33,
			contador:0
		}
	}


Despues le vamos a hacer una forma un poco extraña pero puede servir para no complicar mucho el juego, es el comportamiento del enemigo que disparará de la siguiente forma:

if(aleatorio(0,enemigos.length *10)==4){
					disparosEnemigos.push(agregarDisparosEnemigos(enemigo));
				}

es igual a 4 para que solo dispare cuando	 se de la condicion, y no disparen muchisimo, antes hay que ponerle enemigos.length * 10 para que cuantos menos enemigos haya, mas veces sera verdad la condicion y por tanto mas dispararan	. 
dentro del if le agregamos al array disparosEnemigos con .push()
los disparos generados con la funcion que creamos antes agregarDisparosEnemigos(enemigo) y le pasamos como parametro el enemigo con el que estamos trabajando actualmente

*** hemos cometido un error  en la funcion function dibujarDisparosEnemigos(), antes estaba asi:

function dibujarDisparosEnemigos(){
	for(var i in disparosEnemigos){
		var disparo = disparosEnemigos[i];
		ctx.save();
		ctx.fillStyle="yellow";
		ctx.restore();
	-->	ctx.fillRect(disparo.x, disparo.y, disparo.width,disparo.height);

	}
}

y debe ser asi:

function dibujarDisparosEnemigos(){
	for(var i in disparosEnemigos){
		var disparo = disparosEnemigos[i];
		ctx.save();
		ctx.fillStyle="yellow";
	-->	ctx.fillRect(disparo.x, disparo.y, disparo.width,disparo.height);
		ctx.restore();
	}
}
hay que poner el fillRect()(dibujar el rectangulo del disparo) antes del restore, si no no le pondrá el color adecuado