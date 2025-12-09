const link = document.getElementById('theme-link')
const switcher = document.querySelector("#theme-switcher")

function set_theme(name) {
    let active = false

    if ( name == null ) {
        name = ''
    } else {
        name = `-${name}`
        active = true
    }

    if ( active ) {
        switcher.setAttribute("active", "")
    } else {
        switcher.removeAttribute("active")
    }

    const newFile = `styles/conf/colours${name}.css`
    link.href = newFile

    console.log(newFile)
}

function get_setting(key) {
    return localStorage.getItem(key)
}

function set_setting(key, value) {
    if ( value == null ) {
        localStorage.removeItem(key)
    } else {
        localStorage.setItem(key, value)
    }
}

function change_theme(name) {
    set_setting('theme', name)

    set_theme(name)
}

document.querySelector('#theme-switcher').addEventListener('click', () => {
    const current = get_setting('theme')

    if ( current ) {
        change_theme()
    } else {
        change_theme('light')
    }

    // set_theme(get_setting('theme'))
})

window.addEventListener('load', () => {
    set_theme(get_setting('theme'))
})