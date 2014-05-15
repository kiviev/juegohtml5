https://www.youtube.com/watch?v=ULThHKcTGQw

Parte 9: Save & Restore

El contexto dibuja siempre el ultimo que pongas, con lo que la forma de ver que colores tiene cada cosa es poniendole el color pj en el lugar indicado, antes de lo que queramos cambiar, pero esto cuando sea mucho mas complejo no podemos estar pendientes de donde se cambia el contexto.
Para ello se utilizan las funciones save() y restore().   Con ellas lo que hacemos es guardar un lugar en el que el contexto es de una determinada forma, para luego despues restaurarla cuando queramos.

en el ejemplo se pone save() al principio de la funcion de crear el dibujo, y se restaura el contexto al final de la funcion, de esta manera, podemos poner el rectangulo creado despues de las figuras de otro color, supongo que esto se hará asi, se creará una funcion para crear cada figura, con su save y restore correspondiente y asi, nos aseguramos el color que va a tener cada figura independientemente