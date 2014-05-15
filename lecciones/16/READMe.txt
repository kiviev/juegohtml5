https://www.youtube.com/watch?v=Xsh_hIkow4k

Parte 16: Agregar eventos al teclado 

aqui hemos agragado la funcion agregarEventosTeclado()
y mas abajo la llamamos antes que a loadMedia()

agregarEventosTeclado tiene dos partes:

1- la funcion agregarEvento():
function agregarEvento(elemento,nombreEvento,funcion){
		if(elemento.addEventListener){
			//resto de navegadores
			elemento.addEventListener(nombreEvento,funcion,false);
		}else if(evento.attachEvent){
			//solo par InternetExplorer
			evento.attachEvent(nombreEvento,funcion);
		}
	}

A esta le pasamos 3 argumentos:
	-elemento-->el elemento sobre el que se va a hacer el evento(document)
	-nombreEvento--> es el nombre que le vamos a poner al Evento
	-funcion--> aqui cuando la llamemos le pondremos una funcion anonima que capturara si la tecla esta presionada o no

esta funcion lo que hace es distinguir que navegador se esta usando:
si es explorer utilizara para crear los eventos .attachEvent
y si es cualquier otro .addEventListener ya que explorer la funcion que conoce es attachEvent y no la otra.


y despues llamamos a la funcion agregarEvento 2 veces ( una para presion tecla(keydown) y otra para cuando se suelta(keyup))

agregarEvento(document,'keydown',function(e){
		//ponemos en true la tecla presionada
		teclado[e.keyCode] = true;
	})
	agregarEvento(document,'keyup',function(e){
		//ponemos en false la tecla que dejo de ser presionada
		teclado[e.keyCode] = false;
	})
	
