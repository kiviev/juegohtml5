https://www.youtube.com/watch?v=OylQpwoHSag

Parte 6: Tutorial Dibujar arcos 

ctx.arc(x,y,radio,anguloInicial,AnguloFinal,reloj);

anguloInicial y anguloFinal--> se tienen que expresar en radianes y para ello creamos la funcion:
		function a_radianes(grados){
			return (grados * Math.PI)/180;
		}

reloj--> booleano ,true--> se crea el dibujo en el sentido de las agujas del reloj
					false--> al contrario

decir que asi se generan unas formas raras, al parecer cuando crea un circulo va al otro y lo que intenta es seguir con una linea hacia el otro, mas adelante se podrá resolver esto.