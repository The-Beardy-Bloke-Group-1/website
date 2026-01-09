const _overlay_link = document.getElementById('overlay-link')

function set_overlay(name) {
    if ( name == null ) {
        name = ''
    } else {
        name = `-${name}`
    }

    const newFile = `styles/conf/overlays/overlay${name}.css`
    _overlay_link.href = newFile
}

function change_overlay(name) {
    set_setting("overlay", name)
    set_overlay(name)
}

set_overlay(get_setting("overlay"))