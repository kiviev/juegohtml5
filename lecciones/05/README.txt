https://www.youtube.com/watch?v=Jq-mAzE9zes

Parte 5: Tutorial Rectángulos y borrador 

Dibujando rectangulos y crear funcion borrador, la funcion erase utiliza clearRect() para borrar todo lo que este debajo del rectangulo que dibujamos, y lo dibujamos con canvas.width y canvas.height para que borre todo el rectangulo del canvas.

ctx.fillRect(x,y,ancho,alto); --> dibuja un rectangulo
ctx.strokeRect(x,y,ancho,alto); --> dibuja el borde de un rectangulo
ctx.clearRect(x,y,ancho,alto); --> dibuja un rectangulo en el que borramos todo lo que este dentro de el