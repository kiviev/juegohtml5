https://www.youtube.com/watch?v=wmhVk3eTdTc

Parte 15: El Objeto Nave 
Vamos a crear el objeto de la nave y dibujarla

creamos la variable nave con un objeto JSON:
var nave={
	x:100,
	y: canvas.height -100,
	width: 50,
	height: 50
}
estos atributos nos serviran para dibujar la imagen, en principio sera solo un rectangulo

con la funcion dibujarNave() dibujamos la nave:
function dibujarNave(){
	ctx.save();
	ctx.fillStyle='white';
	ctx.fillRect(nave.x,nave.y,nave.width,nave.height);
	ctx.restore();
}
es muy sencilla, primero salva el contexto, despues crea un color para rellenar(blanco), despues crea un rectangulo con los datos de la nave, y despues se restaura el contexto

al final a la funcion frameLoop le añadimos una llamada a dibujarFondo