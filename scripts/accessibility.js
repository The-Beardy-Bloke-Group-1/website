const themes = {
    '': 'Dark',
    'light': "Light",
    'contrast': "High Contrast"
}

const list = document.querySelector("#theme-list")

for (const [theme_name, display_name] of Object.entries(themes)) {
    const li = document.createElement("li")
    const a = document.createElement("a")

    a.innerHTML = display_name

    li.appendChild(a)
    list.appendChild(li)

    a.addEventListener("mousedown", () => {
        let name = theme_name
        if ( theme_name == "" ) {
            name = null
        }

        change_theme(name)
    })
  }