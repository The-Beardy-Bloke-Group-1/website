const link = document.getElementById('theme-link')
let _switcher = null

function set_theme(name, switcher) {
    let active = false

    if ( name == null ) {
        name = ''
    } else {
        name = `-${name}`
        active = true
    }

    if ( switcher ) {
        if ( active ) {
            switcher.setAttribute("active", "")
        } else {
            switcher.removeAttribute("active")
        }
    }

    const newFile = `styles/conf/colours${name}.css`
    link.href = newFile
}

function change_theme(name) {
    set_setting('theme', name)

    set_theme(name, _switcher)
}


set_theme(get_setting('theme'))

window.addEventListener('load', () => {
    const switcher = document.querySelector("#theme-switcher")
    _switcher = switcher

    set_theme(get_setting('theme'), switcher)

    document.querySelector('#theme-switcher').addEventListener('click', () => {
        const current = get_setting('theme')
    
        if ( current ) {
            change_theme()
        } else {
            change_theme('light')
        }
    
        // set_theme(get_setting('theme'))
    })
})