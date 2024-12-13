export function removePrevPage() {
    const contentDiv = document.querySelector("#content")
    const prevPage = contentDiv.querySelector("div")
    if (prevPage)
        prevPage.remove()
}