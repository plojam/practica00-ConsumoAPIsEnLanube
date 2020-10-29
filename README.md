# practica00-ConsumoAPIsEnLanube

## Identificar la arquitectura de la aplicacion

La practica implementa una pagina web con una arquitectura cliente-servidor.

![i](/imagenes/i.png?raw=true "Title")

## Generar informe de resultados.

Para el desarrollo de esta práctica, se descargó una plantilla de Bootstrap la cual es “navbar-fixed” y se ve como la siguiente.

![0](/imagenes/i0.png?raw=true "Title")

Con esta plantilla, se cambiaron y agregaron ciertos componentes html para moldear la pagina con respecto a los requerimientos de la práctica. La pagina html quedo de la siguiente forma:

![1](/imagenes/i1.png?raw=true "Title")

En donde los cambios más grandes fueron agregar dos etiquetas div las cuales son utilizadas en un documento javascript, la primera corresponde a la información del superhéroe que se buscó.

De la misma forma, se modifico el archivo css para que quede de acuerdo con el proyecto. La pagina inicial, sin realizar ninguna búsqueda queda de la siguiente forma.

![2](/imagenes/i2.png?raw=true "Title")

Para la parte de javascript, se crearon 2 métodos, el primero aplica AJAX para realizar la búsqueda en la API seleccionada, luego de obtener una respuesta, el resultado se castea y se convierte en datos de tipo JSON, luego se llama a la otra función para obtener datos y finalmente se realiza la paginación mediante la implementación de botones que llevan a los demás resultados de la busquda.

![3](/imagenes/i3.png?raw=true "Title")

El segundo método se encarga de obtener la información de un héroe y colocarla en sus etiquetas correspondientes, para luego implementarlo en la pagina html que se tiene.

![4](/imagenes/i4.png?raw=true "Title")

Como resultados de esta practica se tiene la página cuando se realiza una búsqueda.

![5](/imagenes/i5.png?raw=true "Title")

Si se quiere avanzar a otro héroe, solo se da click en el botón que se desee.

![6](/imagenes/i6.png?raw=true "Title")