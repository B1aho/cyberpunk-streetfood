const contentDiv = document.querySelector("#content")

export function createMenu() {
    removePrevPage()
}

export function createHome() {
    removePrevPage()
    const main = document.createElement("div")
    main.id = "home-main"
    // Create home page description
    const descCard = document.createElement("div")
    descCard.classList.add("home-description")
    const header = document.createElement("h1")
    header.innerText = "First SCI-FI Cafe"
    const description = document.createElement("p")
    description.innerText = "ADAFEWfew fesfkewofewjafwejf waejfwjfawjfwe"
    descCard.append(header, description)
    // Create vibe image
    const imgCard = document.createElement("div")
    imgCard.classList.add("home-images")
    const firstImg = document.createElement("img")
    firstImg.id = "cocktail"
    const secondImg = document.createElement("img")
    secondImg.id = "neon-logo"
    firstImg.setAttribute("src", "./assets/images/cocktail-1.png")
    secondImg.setAttribute("src", "./assets/images/neon-logo.png")
    imgCard.append(firstImg, secondImg)
    main.append(descCard, imgCard)
    contentDiv.append(main)
}

export function createAbout() {
    removePrevPage()
}

export function createBooking() {
    removePrevPage()
}

export function createContact() {
    removePrevPage()
}

function removePrevPage() {
    const prevPage = contentDiv.querySelector("div")
    if (prevPage)
        prevPage.remove()
}