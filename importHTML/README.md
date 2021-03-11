# importHTML

Import asynchronous html files in containers

### [DEMO](https://galiprandi.github.io/js/importHTML/)

---

### Function that imports html files into their respective container asynchronously.

### Usage:

1 - Import importHTML() function:

```javascript
import importHTML from "./importHTML.js"
```

2 - Call function when DOM content is loaded:

```javascript
document.addEventListener("DOMContentLoaded", importHTML())
```

3 - Require HTML module using anchor tag with a data-module attribute:

```html
<a href="./views/header.html" data-module="">Loading header...</a>
```

All anchor are replaced with content of files loaded.

---

### Función que importa archivos html en sus respectivos contenedores de forma asíncrona.

### Modo de Uso:

1 - Importar la función importHTML():

```javascript
import importHTML from "./importHTML.js"
```

2 - Llamar a la función cuando el contenido del documento está cargado:

```javascript
document.addEventListener("DOMContentLoaded", importHTML())
```

3 - Requerir los módulos HTML usando etiquetas anclas con el atributo data-module:

```html
<a href="./views/header.html" data-module="">Loading header...</a>
```

Todos los enlaces serán reemplazados por el contenido de los archivos cargados.

---

Author: Germán Aliprandi <galiprandi@gmail.com>

Licence: MIT
