https://www.youtube.com/watch?v=q61n7GO8V48

Parte 21: Enemigos 

Aqui lo que hacemos es agregar los enemigos al escenario con la funcion actualizaEnemigos()

lo que hace es comprobar si el estado de juego es iniciando se recorre un for  hasta 10 ( para que salgan 10 enemigos) y en cada iteracion le agregamos con push al array enemigos un enemigo con sus caracteristicas ( el atributo x es 10 + i*50 para que cada enemigo salga en una posicion x diferente)
despues al estado del juego le ponemos que esté en jugando, para que cambie y no se repita ( ojo hay que poner esto ultimo fuera del for pero dentro del if)

function actualizaEnemigos(){
	if(juego.estado == 'iniciando'){
		for(var i =0 ; i<10 ; i++){
			enemigos.push({
				x: 10 + (i*50),
				y: 10,     
				height: 40,   
				width:40,  
				estado:'vivo'
			});
			juego.estado='jugando';
		}
	}
}