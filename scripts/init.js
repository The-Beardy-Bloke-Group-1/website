const copyright_disclaimer = document.querySelector("#copyright-disclaimer")
const date = new Date()
const year = date.getFullYear()

copyright_disclaimer.innerHTML = copyright_disclaimer.innerHTML.replace("YEAR", year.toString())