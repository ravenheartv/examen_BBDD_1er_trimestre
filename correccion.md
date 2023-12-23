# Idaira

Test: 4/12. ouch! Se que sabes usar js, pero hay conceptos que están un poco confusos en su base, te recomiendo dar un pequeño repaso a estos conceptos, muchos son bastante agnósticos a la sintáxis de js, así que te servirán dentro de cualquier lenguaje.

Práctica: 

Está bien, pero tu localStorage no funciona! :( no carga los datos al iniciar la página, ya que estas cargando tu script en el header, al hacer esto, el script se ejecuta antes de que exista el resto de la página, por lo que no puede encontrar los elementos que quieres modificar. En codepen esto no pasa porque el script se carga en el body, pero en local no funciona.

Además, tienes que tener cuidado con la estructura que se usa en codepen. Copiaste tu página entera, por lo que tienes dos elementos `html`, dos elementos `head`, dos elementos `body`... Esto no es correcto, y lanzará muchos errores por consola.

El diseño está bien, pero puedes tener algunas mejoras de usabilidad:
    - Al añadir participantes nuevos, el contenedor se va desplazando hacia abajo, por lo que el usuario tendrá que hacer scroll para ver los nuevos participantes, esto tiene varias soluciones simples, en clase hemos visto como usar `position: absolute` para que el contenedor se quede fijo en la pantalla, y no se mueva al añadir nuevos elementos, pero con la estructura actual que tienes es facil usar `display: flex` para crear una estructura de tres columnas:

```css
body {
    font-family: 'Arial', sans-serif;
    background-color: #f4ecf7; 
    color: #4a148c; 
    margin: 0;
    display: flex;
    height: 100vh;
  }
  div{
    width: 100%;
  }
```

Si añades un `<div></div>` vacío al final de tu body, y le das el estilo anterior, puedes tener un diseño en tres columnas:
![Alt text](image.png)

No es perfecto, pero ganas en muchisima usabilidad, y es muy fácil de implementar.

Documentación:

Está bien, pero muy escaso a nivel de markdown y código, recuerda que puedes usar:

```js
function añadir(){
    let valor = document.getElementById("valor").value;
    let elemento = document.createElement("p");
    elemento.innerHTML = valor;
    document.getElementById("resultado").appendChild(elemento);
    document.getElementById("valor").value = "";
    lista.push(valor);
    localStorage.setItem("lista", JSON.stringify(lista));
}
```

```html
<div class="container">
    <input type="text" id="valor" placeholder="Introduce un nombre">
    <button onclick="añadir()">Añadir</button>
    <button onclick="sorteo()">Sortear</button>
    <button onclick="borrar()">Borrar</button>
</div>
```

```css
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 2em;
}
```

Para compartir código de forma más rápida y eficiente, es la forma mas simple de explicar que hace y como funciona tu app.

Nota: 7
