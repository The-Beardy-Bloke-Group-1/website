const _size_link = document.getElementById('size-link')

function set_size(name) {
    if ( name == null ) {
        name = ''
    } else {
        name = `-${name}`
    }

    const newFile = `styles/conf/sizes${name}.css`
    _size_link.href = newFile
}

function change_size(name) {
    set_setting("font-size", name)
    set_size(name)
}

set_size(get_setting("font-size"))