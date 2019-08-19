# jQuery

Comenzar con jQuery puede ser fácil o desafiante, según su experiencia con JavaScript, HTML, CSS y conceptos de programación en general. Además de estos artículos, puede leer sobre la [historia de jQuery](https://jquery.org/history/) y los [términos de licencia](https://jquery.org/license/) que se aplican a los proyectos de jQuery. También puede [hacer una donación](https://jquery.org/donate/) para ayudar al [equipo de jQuery a](https://jquery.org/team/) continuar mejorando jQuery.

Una cosa importante que debes saber es que jQuery es solo una **biblioteca de JavaScript** . Se puede acceder a todo el poder de jQuery a través de JavaScript, por lo que tener una sólida comprensión de JavaScript es esencial para comprender, estructurar y depurar su código. Aunque trabajar con jQuery con regularidad puede, con el tiempo, mejorar su competencia con JavaScript, puede ser difícil comenzar a escribir jQuery sin un conocimiento práctico de las estructuras y sintaxis incorporadas en JavaScript. Por lo tanto, si es nuevo en JavaScript, le recomendamos que consulte el [tutorial básico de JavaScript](https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/JavaScript_basics) en la Red de Desarrolladores de Mozilla (MDN).



# Cómo trabaja jQuery

### jQuery: The Basics

Este es un tutorial básico, diseñado para ayudarte a comenzar a utilizar jQuery. Si aún no tiene una configuración de página de prueba, comience por crear la siguiente página HTML:

## The Document Ready Event

Esto es para evitar que se ejecute cualquier código jQuery antes de que el documento termine de cargarse (esté listo).

Es una buena práctica esperar a que el documento esté completamente cargado y listo antes de trabajar con él. Esto también le permite tener su código JavaScript antes del cuerpo de su documento, en la sección de encabezado.

Aquí hay algunos ejemplos de acciones que pueden fallar si los métodos se ejecutan antes de que el documento esté completamente cargado:

- Intentando ocultar un elemento que aún no está creado
- Intentando obtener el tamaño de una imagen que aún no está cargada

**Consejo:** El equipo de jQuery también ha creado un método aún más corto para el evento de preparación de documentos:

```html
<!DOCTYPE html>
    <head>
        <meta charset="utf-8" />
        <title>Practicanddo jQuery</title>
    </head>
    <body>

        <h1>Formato de documento HTML</h1>
              
        <p>Un párrafo es una unidad de discurso en texto escrito que expresa una idea o un argumento.</p>

        <p>Párrafo 2 bla bla bla bla</p>
        <p id="SelectorID">Párrafo con ID</p>

        <button>Ocultar Todo</button>
        <button id="BtnMostrarTodo">Mostrar Todo</button>
        <button id="BtnMostrar">MostrarParrafo con ID</button>

        <script type="text/javascript" src="./lib/jquery-3.4.1.min.js"></script>
        <script type="text/javascript" src="./lib/App.js"></script>
        <script>
            $(document).ready(function(){//
                
                $("button").click(function(){
                    $("p").hide(); // Todos los elementos de tipo parrafo
                });

                $("#BtnMostrarTodo").click(function(){
                    $("p").show();
                });

                $("#BtnMostrar").click(function(){
                    $("#SelectorID").show();
                });
            });
        </script>
    </body>
</html>
```

# Sintaxis de jQuery

La sintaxis de jQuery está hecha a medida para **seleccionar** elementos HTML y realizar alguna **acción** en el (los) elemento (s).

La sintaxis básica es: **$ ( selector ). acción ()**

- Un signo $ para definir / acceder a jQuery
- Un ( *selector* ) para "consultar (o encontrar)" elementos HTML
- Una *acción* jQuery () que se realizará en el elemento (s)

Ejemplos:

`$(this).hide()` - Oculta el elemento actual.

`$("p").hide()` - Oculta todos los elementos <p>.

`$(".test").hide()` - Oculta todos los elementos con clase = "test".

`$("#test").hide()` - Oculta el elemento con id = "test".



## El evento Document Ready

Es posible que haya notado que todos los métodos de jQuery en nuestros ejemplos están dentro de un evento preparado para documentos:

```javascript
$(document).ready(function(){

  // jQuery methods go here...

});
```

Esto es para evitar que se ejecute cualquier código jQuery antes de que el documento termine de cargarse (esté listo).

Es una buena práctica esperar a que el documento esté completamente cargado y listo antes de trabajar con él. Esto también le permite tener su código JavaScript antes del cuerpo de su documento, en la sección de encabezado.

Aquí hay algunos ejemplos de acciones que pueden fallar si los métodos se ejecutan antes de que el documento esté completamente cargado:

- Intentando ocultar un elemento que aún no está creado
- Intentando obtener el tamaño de una imagen que aún no está cargada

**Consejo:** El equipo de jQuery también ha creado un método aún más corto para el evento de preparación de documentos:

```javascript
$(function(){

  // jQuery methods go here...

});
```

Usa la sintaxis que prefieras. Creemos que el evento de documento listo es más fácil de entender al leer el código.

# jQuery Selectors

Los selectores jQuery son una de las partes más importantes de la biblioteca jQuery, le permiten seleccionar y manipular elementos HTML.

Los selectores jQuery se utilizan para "buscar" (o seleccionar) elementos HTML según su nombre, id, clases, tipos, atributos, valores de atributos y mucho más. Se basa en los [selectores de CSS](https://www.w3schools.com/cssref/css_selectors.asp) existentes y, además, tiene algunos selectores personalizados.

Todos los selectores en jQuery comienzan con el signo de dólar y los paréntesis: 

```javascript
$().
```

## El selector de elementos

El selector de elementos jQuery selecciona elementos en función del nombre del elemento.

Puedes seleccionar todos los `<p>`elementos en una página como esta:

```javascript
$("p")
```

## The #id Selector - El Selector #id

El selector jQuery usa el atributo id de una etiqueta HTML para encontrar el elemento específico.`#id`

Una identificación debe ser única dentro de una página, por lo que debe usar el selector #id cuando desee encontrar un elemento único y único.

Para encontrar un elemento con un ID específico, escriba un carácter de hash, seguido del ID del elemento HTML:

```html
<button id="BtnMostrar">MostrarParrafo con ID</button>
```

```javascript
$("#BtnMostrar").click(function(){
	$("#SelectorID").show();
});
```

## The .class Selector - El selector de clase.

El `.class` selector jQuery encuentra elementos con una clase específica.

Para buscar elementos con una clase específica, escriba un carácter de punto, seguido del nombre de la clase:

```html
<p class="SelectorDeClase"> bla bla bla bla</p>
<p class="SelectorDeClase"> bla bla bla bla</p>
<p class="SelectorDeClase"> bla bla bla bla</p>
```

```javascript
$("#BtnMostrarSelectorDeclase").click(function(){
	$(".SelectorDeClase").show();
});
```



# jQuery Event Methods

jQuery está hecho a medida para responder a eventos en una página HTML.

## ¿Qué son los eventos?

Las diferentes acciones de los visitantes a las que puede responder una página web se denominan eventos.

Un evento representa el momento preciso en que algo sucede.

Ejemplos:

- moviendo un mouse sobre un elemento
- seleccionando un botón de radio
- haciendo clic en un elemento

Aquí hay algunos eventos comunes de DOM:

| Mouse Events | Keyboard Events | Form Events | Document/Window Events |
| :----------- | :-------------- | :---------- | :--------------------- |
| click        | keypress        | submit      | load                   |
| dblclick     | keydown         | change      | resize                 |
| mouseenter   | keyup           | focus       | scroll                 |
| mouseleave   |                 | blur        | unload                 |



























### jQuery: The Basics

Este es un tutorial básico, diseñado para ayudarte a comenzar a utilizar jQuery. Si aún no tiene una configuración de página de prueba, comience por crear la siguiente página HTML:

```html
<!DOCTYPE html> <!-- Documento HTML5 -->
<html>
    <head>
        <title>Titulo De La Pagina</title>
    </head>

    <body>
        <h1>Bienvenido a mi Pagigna web</h1>
        <p>Esto es un parrafo.</p>

        <script>

            // Tu script Aqui
            window.onload = function() {
                alert("Hello World");
            };

        </script>
    </body>
</html>
```

## window.onload

Para asegurarse de que su código se ejecuta después de que el navegador termina de cargar el documento, muchos programadores de JavaScript ajustan su código en una `onload`función:

```html
`window.onload = function() {     alert( "welcome" ); };`
```

## window.alert()

Puede utilizar un cuadro de alerta para mostrar los datos:

```html
<script>
    window.alert("EstoEsUnAlerta");
</script>
```

## document.write() y console.log()

Puede utilizar un cuadro de alerta para mostrar los datos:

```html
<script>
    document.write("Escribiendo Dentro del Documento....");
    console.log("Escribiendo por Consola del Navegador");
</script>
```

## Interactuando con Elementos HTML

```html
<h2>JavaScript Funciones</h2>

<p>Como Interactuar con un elmento HTML:</p>

<p id="ElementoHTML"></p>

<script>

    var x = Suma(4, 6);
        document.getElementById("ElementoHTML").innerHTML = x;

    function Suma(A, B)
    {
        return A + B;
    }
</script>
```

