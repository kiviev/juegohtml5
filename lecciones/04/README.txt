https://www.youtube.com/watch?v=YUoLKhJpiaw

Parte 4: Tutorial para modificar el contexto (grosor de Línea) 

Aqui creamos rectangulos, los coloreamos y utilizamos globalAlpha .

ctx.fillStyle='color' --> le da color al rectangolo, el color se puede declarar de varias formas, tambien en hex, rgb, rgba, o el color en palabra, p ej 'red'.

ctx.strokeStyle='color'; --> igual que el anterior pero para el rectangulo creado con strokeRect() que crea solo el borde del rectangulo.

ctx.globalAlpha= numero; --> modifica el factor alpha de el canvas, depende de donde se ponga modifica solo lo que esté por debajo de la linea en la que se declaró, numero--> entre 0 y 1.