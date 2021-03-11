# importHTML

Import asynchronous html files in containers

### [DEMO](https://galiprandi.github.io/js/importHTML/)

---

### Function that imports html files into their respective container asynchronously.

### Usage:

1 - Import importHTML function:

```javascript
import importHTML from "./importHTML.js"
```

2 - Call to function when DOM content is loaded:

```javascript
document.addEventListener("DOMContentLoaded", importHTML())
```

3 - 3 - Use anchor tag with data-module attribute to invoke load HTML:

```html
<a href="./views/header.html" data-module="">Loading header...</a>
```

All anchor's will be replaced with content of HTML modules loaded.

---

### Función que importa archivos html en sus respectivos contenedores de forma asíncrona.

### Modo de Uso:

1 - Importar la función importHTML:

```javascript
import importHTML from "./importHTML.js"
```

2 - Llamar a la función cuando el contenido del documento está cargado:

```javascript
document.addEventListener("DOMContentLoaded", importHTML())
```

3 - Use la etiqueta de anclaje con el atributo del módulo de datos para invocar la carga HTML:

```html
<a href="./views/header.html" data-module="">Loading header...</a>
```

Todos los anclajes serán reemplazados con el contenido de los módulos HTML cargados.

---

Author: Germán Aliprandi <galiprandi@gmail.com>

Licence: MIT
