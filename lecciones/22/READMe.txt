https://www.youtube.com/watch?v=NYkT1Q2HzN4

Parte 22: Mover Enemigos 

aqui le hemos añadido una propiedad a enemigos, el contador, que servira para mover despues los enemigos de un lado a otro

dentro de actualizarEnemigos lo que hacemos es recorrer el array enemigos y como otrasveces vamos a asignarle a la variable enemigo el valor de enemigos[i]
primero comprobamos si no hay enemigo( por si acaso lo hemos matado que vendra despues) y si no lo hay pasamos de esa iteracion con continue
despues si enemigo esta y el estado de enemigo es vivo
el contador le sumamos 1
y al final lo que vamos a hacer es utilizar la funcion de seno de Math Math.sin() (con esto lo que conseguimos es que los enemigos se muevan a un lado y a otro porque el seno unas veces es positivo y otras negativo)
lo que le añadimos despues del if es:

for(var i in enemigos){
			var enemigo = enemigos[i];
			if(!enemigo){continue}
			if(enemigo && enemigo.estado == 'vivo'){
				enemigo.contador ++;
				enemigo.x += Math.sin(enemigo.contador * Math.PI/70)*5;
				
				}
			}