https://www.youtube.com/watch?v=O3xYczO2eJ8

Parte 10: Intervalos de Tiempo 

En esta ocasion solo vamos a ver como funcionan los metodos setInterval,setTimeout y clearInterval

setInterval(funcion(){},x /*intervaloenMilisegundos*/)--> ejecuta la funcion que pongamos(bien sea anonima como el caso anterion o declarada despues) cada x milisegundos.

setTimeout(function(){},x) --> ejecuta la funcion cuando pasen x milisegundos

clearInterval(variable)--> el setInterval se guarda en una variable, y cuando queramos pararla utilizamos esta funcion.


De esta manera aqui lo que hemos hecho es lo siguiente:

variable contador

variable intervalo --> con setInterval, la funcion de dentro lo que hace es ejecutar un console.log mostrando el segundo en el que está

y setTimeout--> lo que hace esta es que al ejecutar su funcion a los 10 segundos con clearInterval para la variable intervalo