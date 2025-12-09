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

