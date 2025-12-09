const _font_link = document.getElementById('font-link')

function set_font(name) {
    if ( name == null ) {
        name = ''
    } else {
        name = `-${name}`
    }

    const newFile = `styles/conf/fonts${name}.css`
    _font_link.href = newFile
}

function change_font(name) {
    set_setting("font-style", name)
    set_font(name)
}

set_font(get_setting("font-style"))