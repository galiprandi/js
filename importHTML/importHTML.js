export default function importHTML(
  root = document,
  selector = "a[data-module]"
) {
  const modules = root.querySelectorAll(selector)

  if (!!!modules.length) return

  modules.forEach((module) => {
    if (!module.href) return
    const moduleData = getModuleContent(module.href)
    moduleData.then((data) => {
      importHTML(data)
      module.parentElement.replaceChild(data, module)
    })
  })
}

// Function to get content of module
async function getModuleContent(url) {
  try {
    const response = await fetch(url)
    // Manage error
    if (!response.ok)
      throw Error(`${url} ${response.status} ${response.statusText}`)
    const data = await response.text()
    // Create template and add data
    const template = document.createElement("template")
    template.innerHTML = data
    return template.content
  } catch (error) {
    console.error(error)
  }
}
