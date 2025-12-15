const setting_name = "access_notice_viewed"
const viewed = get_setting(setting_name)

if ( !viewed ) {
    const dialog = document.querySelector("#access-dialog")
    const close = dialog.querySelector("#close")
    const confirm = dialog.querySelector("#confirm")

    function dialog_close() {
        dialog.close()
        set_setting(setting_name, true)
    }

    close.addEventListener("click", () => {
        dialog_close()
    })

    confirm.addEventListener("click", () => {
        window.location.href = "access.html"
        dialog_close()
    })

    dialog.showModal()
}

