# Examen 1er trimestre BBDD

1º de DAM en ESCAV Granada

Nombre: Idaira Lozano 

Fecha: 19/12/23

## Documentacion del examen:
Mi examen realiza actividades basicas de Crear, Leer, Actualizar y Borrar.
Además, restaura la lista desde el almacenamiento local al cargar la página.

## Función de añadir:
1 Captura el valor de un elemento de entrada (input) con la clase "input_app".

2 Crea un nuevo elemento <p> para mostrar el valor capturado.

3 Agrega este nuevo elemento al contenedor con la clase "resultados".

4 Limpia el valor del campo de entrada.

5 Agrega el valor a la lista.

6 Almacena la lista en el almacenamiento local (localStorage) después de convertirla a formato JSON.

## Función de borrar:
1 Elimina el elemento "lista" del almacenamiento local, borrando así todos los datos almacenados.

2 Limpia el contenido del contenedor con la clase "resultados", eliminando así todos los elementos visuales de la lista.

## Función aleatorio:
1 Selecciona un elemento con la clase "ganador" para mostrar el resultado.

2 Elige aleatoriamente un elemento de la lista y lo muestra como el ganador.

## Constante Datos Almacenados:
1 Recupera la lista almacenada del localStorage.

2 Si hay datos, los parsea de formato JSON y los asigna a la variable lista.

3Por cada elemento en la lista, crea un nuevo elemento <p> y lo agrega al contenedor con la clase "resultados", restaurando así visualmente la lista anterior.


Examen practico en CODEPEN[aquí](https://codepen.io/Idaira-Lozano/pen/bGZbGJP)