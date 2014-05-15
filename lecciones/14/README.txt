https://www.youtube.com/watch?v=hB-enX3fnH0

Parte 14: Comenzando el juego
comenzamos el juego lo primero que he hecho ha sido meter el canvas en un div para por css colocarlo y dimensionarlo

despues creamos un archivo main.js, para empezar el juego

en el lo primero definimos los objetos importantes, o sea, el canvas, y contexto

declaramos la variable fondo como global

definimos la funcion loadMedia() y en ella en fondo creamos un nuevo objeto Image, y le damos la ruta(**** ojo, aqui hay que darle la ruta desde el archivo que está el canvas, no desde el que está el .js****)
y a fondo le asignamos onload con una funcion, que será un intervalo en el que se ejecutara la funcion frameLoop cada 1000/55 ms(osea una 55ª parte de un segundo, todavia no se porque esa cifra)

la funcion frameLoop es la que se encargará de hacer lo que tenga que hacerse en cada frame y esta en primer lugar llama a la funcion drawBackgroun() que lo unico que hace por ahora es crear la imagen con la imagen del fondo