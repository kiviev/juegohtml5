https://www.youtube.com/watch?v=S9c3d_8AnA0


Parte 11: Animación Básica 
hay que declarar varias variables

velocidad --> con la velocidad que se va a mover
direccion = velocidad--> luego la usaremos para que cambie de direccion la bola
iniciar--> empieza en false, con esta haremos que el boton de iniciar, cambia a detener y se detenga la animacion
x, y coordenadas de donde empieza la bola

con fillStyle damos un color de inicio a la bola y con fill, la rellenamos

depues hacen falta dos funciones:

function draw(canvas,ctx){
		canvas.width=canvas.width;// limpiar el canvas, una manera, pero de esta manera se carga el fill, por eso hay que ponerlo debajo , para que cada vez que se ejecute la funcion se le de el fillStyle de la bola

		ctx.fillStyle='rgb(200,0,0)';// se le da denuevo un filStyle
		ctx.arc(x,y,10,0,7);//se crea la bola(circulo con solo poner 0 y 7 se crea completo, el circulo debe tener 6.30 radianes, pero si se pone un poco mas no pasa nada y lo crea)
		ctx.fill();// se rellena
	}

En la siguiente lo que vamos a manipular es que a y le vamos a aumentar la variable direccion, porque? 
la pelota a veces va hacia arriba y a veces hacia abajo.
la var direccion va a ser negativa cuando la bola vaya hacia arriba y positiva cuando vaya hacia abajo, entonces, cada vez que nosotros le aumentemos direccion por ejemplo:
si y vale 100 y direccion es negativa, y cada vez irá valiendo 99,98,97... y si es la direccion positiva irá aumentando 2,3,4...

Despues llamamos a la funcion draw y le pasamos canvas, el contexto, x e y

con los if vamos a verificar la direccion

el primero:
si y es menor que la altura de canvas - 20 para que no se pase, la direccion es igual a menos velocidad, y asi cambiará de rireccion
el segundo:
si y es mayor que 20(para que no llegue hasta el tope) direccion es igual a velocidad(positiva, para que la pelota empieze a caer)
function moveAndDraw(canvas,ctx){
		if(y > (canvas.height - 20)){direccion =  -velocidad}
		if(y < 20){direccion= velocidad}
		y+= direccion;
		draw(canvas,ctx,x,y)
	}

funcion init
se le añade un evento click al boton y despues

 si iniciar es verdadero, this(osea el propio boton), cambia el valor a iniciar, y la variable intervalo la para con clearInterval, y ademas iniciar lo pone como falso.

 y si es falso cambia el valor del boton cambia su valor a detener, ademas a la variable intervalo le crea un setInterval que ejecuta la funcion moveAndDraw que creamos antes, con los parametros canvas, y contexto, ademas iniciar la cambiamos a true y al intervalo le damos 32 ms