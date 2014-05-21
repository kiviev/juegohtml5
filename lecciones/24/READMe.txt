https://www.youtube.com/watch?v=s5VJlbMafq0

Parte 24: Eliminar Enemigos

Aqui vamos a crear una funcion que se llama verificarContacto() que se ayuda de la que anteriormente creamos llamada hit() para verificar si ha habido alguna colision
lo primero que hacemos es recorrer el array disparos y crear una variable disparo en cada iteracion y despues recorrer el array enemigos y lo mismo pero con enemigo

despues es donde viene la verificacion.  Si hit(disparo,enemigo)devuelve true, es que ha habido contacto y le cambiamos el estado a enemigo, le ponemos el contador a 0 y lo verificamos con console.log(). funcion:

function verificarContacto(){
	for(var i in disparos){
		var disparo = disparos[i];
		for( var j in enemigos){
			var enemigo = enemigos[j];
			if(hit(disparo,enemigo)){
				enemigo.estado='hit';
				enemigo.contador=0;
				console.log('hubo contacto');
			}
		}
	}
}

Ahora hay que actualizar los enemigos, borrandolos cuando se produzca una colision y eso lo hacemos actualizando la funcion actualizaEnemigos().
En ella añadimos otro if que compruebe si el estado del enemigo es igual a "hit" , y si es asi, que el contador ++ y otra comprobacion mas ( esta es para que no desaparezca rapidamente)y es que si el contador es >= 20 el estado se cambia a "muerto" y su contador se pone a 0.
Posteriormente hay que filtrar el array enemigos para borrar los que esten muertos 
lo que se se añade a actualizaEnemigos es:

if(enemigo && enemigo.estado =="hit"){
				enemigo.contador++;
				if(enemigo.contador >=20){
					enemigo.estado="muerto";
					enemigo.contador=0;
					
				}
			}
			}
			
			enemigos= enemigos.filter(function(enemigo){
				if(enemigo && enemigo.estado !="muerto"){return true}
					return false;
			});
