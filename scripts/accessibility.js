const themes = {
    '': 'Dark (Default)',
    'light': "Light",
    'contrast': "High Contrast"
}

const fonts = {
    '': 'Default',
    'dyslexia': "Dyslexic",
    'roboto': "Simple"
}

const fontsizes = {
    'small': 'Small',
    '': "Default",
    'large': "Large"
}

const theme_list = document.querySelector("#theme-list")
const font_list = document.querySelector("#font-list")
const size_list = document.querySelector("#size-list")
const reset_button = document.querySelector("#reset")

// for (const [theme_name, display_name] of Object.entries(themes)) {
//     const li = document.createElement("li")
//     const a = document.createElement("a")

//     a.innerHTML = display_name

//     li.appendChild(a)
//     theme_list.appendChild(li)

//     a.addEventListener("mousedown", () => {
//         let name = theme_name
//         if ( theme_name == "" ) {
//             name = null
//         }

//         change_theme(name)
//     })
// }

function init_setting(parent, options, callback) {
    for (const [internal_name, display_name] of Object.entries(options)) {
        const li = document.createElement("li")
        const a = document.createElement("a")
    
        a.innerHTML = display_name
    
        li.appendChild(a)
        parent.appendChild(li)
    
        a.addEventListener("mousedown", () => {
            callback(internal_name)
        })
    }
}

init_setting(theme_list, themes, (internal_name) => {
    let name = internal_name
    if ( internal_name == "" ) {
        name = null
    }

    change_theme(name)
})

init_setting(font_list, fonts, (internal_name) => {
    let name = internal_name
    if ( internal_name == "" ) {
        name = null
    }

    change_font(name)
})

init_setting(size_list, fontsizes, (internal_name) => {
    let name = internal_name
    if ( internal_name == "" ) {
        name = null
    }

    change_size(name)
})

reset_button.addEventListener("click", () => {
    reset_all_settings()
    window.location.replace("index.html")
})