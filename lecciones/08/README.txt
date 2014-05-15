https://www.youtube.com/watch?v=GnwdJeWeLU8


Parte 8: Tutorial para Dibujar Imágenes 

aqui lo unico que necesitamos es tener una imagen en el html, y con css la deshabilitamos con display:none (solo para que no salga), despues la guardamos en una variable img, 
y con ctx.drawImage, la cargamos, los parametros son varios

los mas simples:
ctx.drawImage(imagen,cordenadaX,cordenadaY);--> argumentos minimos para que funcione

algo mas complejos
ctx.drawImage(imagen,cordenadaX,cordenadaY,whidth,heigth);-->para deformar la imagen p ej

todos los argumentos:
 	context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);

mas ejemplos:
http://www.w3schools.com/tags/canvas_drawimage.asp