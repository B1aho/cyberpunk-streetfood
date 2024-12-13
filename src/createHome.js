import { removePrevPage } from "./removePrevPage";

import cocktail from "./assets/images/cocktail-1.png";
import logo from "./assets/images/neon-logo.png";

export function createHome() {
    const contentDiv = document.querySelector("#content")
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
    firstImg.src = cocktail
    secondImg.src = logo
    // Append all elements to the DOM
    imgCard.append(firstImg, secondImg)
    main.append(descCard, imgCard)
    contentDiv.append(main)
};