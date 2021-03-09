<link
      rel="stylesheet"
      href="https://galiprandi.github.io/css-toolset.css/css-toolset.min.css"
    /> 
    
# Poblar Listas: Buenas prácticas

<blockquote>
      <p>
        En este ejercicio se busca explicar las buenas prácticas en la
        manipulación del DOM (Document Object Model).
      </p>
      <p>
        Prácticas que se hacen imprescindibles cuando necesitas poblar grandes
        listas o tables que puedan generar problemas de rendimiento y/o glitch
        en el navegador.
      </p>
</blockquote>

# Populate List: Best Practices

<blockquote>
      <p>
        This exercise seeks to explain good practices in the manipulation of the
        DOM (Document Object Model).
      </p>
      <p>
        Practices that become essential when you need to populate large lists or
        tables that can generate performance problems and / or glitch in the
        browser.
      </p>
</blockquote>

### La función principal / The main function

```javascript
function populateList(list, template, container) {
  if (!list || !list.length || !template || !container) return false

  const content = template.content

  fragment = document.createDocumentFragment()

  fragment.appendChild(content)

  const title = fragment.querySelector("h1")

  const ul = fragment.getElementById("elements-list")

  title.textContent = "Populating best practices"

  list.forEach((item) => {
    const li = document.createElement("li")
    li.textContent = item
    ul.appendChild(li)
  })

  container.appendChild(fragment)
}
```

### Repasemos la función con más detalle: / Let's review the function in more detail:

```javascript
// Function to populate list
function populateList(list, template, container) {
  /*
            ES: Primero debemos hacer algunos chequeos para continuar con seguridad

            EN: First we must do some checks to continue safely
        */
  if (!list || !list.length || !template || !container) return false

  /*
            ES: Guardamos el contenido del template en una constante

            EN: We put the content of the template in a constant
       */
  const content = template.content

  /*
            ES: Creamos un DocumentFragment para insertar elementos y evitar la manipulación de DOM que puede afectar el rendimiento.

            EN: We create a DocumentFragment to insert elements and avoid DOM manipulation that can be affects performance.
        */
  fragment = document.createDocumentFragment()

  /*
            ES: Agregamos el contenido del template al DocumentFragment creado.

            EN: Add the content of the template to the created DocumentFragment.
        */
  fragment.appendChild(content)

  /*
            ES: Ahora podemos hacer búsquedas dentro de DocumentFragment, entonces guardamos en dos constantes el título y la lista desordenada que usaremos más tarde.

            EN: Now we can do searches inside the DocumentFragment, then we save the title and the unordered list in two const that we will use later.
        */
  const title = fragment.querySelector("h1")
  const ul = fragment.getElementById("elements-list")

  /*
            ES: Ahora podemos modificar el texto del <h1>, si bien hay varias formas de hacerlo, por cuestiones de performance, es recomendable hacerlo modificando la propiedad textContent.

            EN: Now we can modify the text of the <h1>, although there are several ways to do it, for performance reasons, it is recommended to do so by modifying the textContent property.
        */
  title.textContent = "Populating best practices"

  /*
            ES: Ahora podemos recorrer el array y en cada iteración debemos crear un elemento y modificar sus propiedades como lo sugieren las buenas practicas. 
                Los bucles recomendados por cuestiones de rendimiento son el for tradicional o en su defecto el forEach.

            EN: Now we can go through the array and in each iteration we must create an element and modify its properties as suggested by good practices.
                The loops recommended for performance issues are the traditional for or, failing that, the forEach.
        */
  list.forEach((item) => {
    const li = document.createElement("li") // Create new <li> element
    li.textContent = item
    ul.appendChild(li) // Append new element to list
  })

  /*
            ES: Finalmente, una vez que tenemos el DocumentFragment con todas las modificaciones necesarias podemos insertar su contenido dentro del contenedor.

            EN: Finally, once we have the DocumentFragment with all the necessary modifications, we can insert its content into the container.
        */
  container.appendChild(fragment)
}
```
