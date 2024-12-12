const contentDiv = document.querySelector("#content")

export function createMenu() {

}

export function createHome(previousPage) {
    if (previousPage)
        previousPage.remove()//previousPage.style.display = "none"; - копить их и потом чекать загружены или нет уже вместо создания каждый раз
    const main = document.createElement("div")
    main.id = "home-main"
    // Create home page description
    const descCard = document.createElement("div")
    descCard.classList.add("home-description")
    const header = document.createElement("h1")
    const description = document.createElement("p")
    descCard.append(header)
    descCard.append(description)

}

export function createAbout() {
    
}

export function createBooking() {
    
}

export function createContact() {
    
}