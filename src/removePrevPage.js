export function removePrevPage() {
    const contentDiv = document.querySelector("#content")
    let prevPage = contentDiv.querySelector(".page")
    if (prevPage)
        prevPage.remove()
}