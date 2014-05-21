https://www.youtube.com/watch?v=OcrQz5G31P4


Parte 27: Disparar a la Nave


Ahora vamos a verificar que los disparos de los enemigos han hecho contacto con la nave
para ello añadimos a la funcion verificarContacto() lo siguiente fuera del for que hay

if(nave.estado=='hit' || nave.estado=='muerto')return;
	for (var i in disparosEnemigos){
		var disparo = disparosEnemigos[i];
		if(hit(disparo,nave)){
			nave.estado='hit';
			console.log('hubo contacto');
		}
	}

****
el if lo que es que solo verifica un contacto, ya que si no esta ni hit ni muerto es que está viva, si la quitamos, el console.log dará multiples contactos
