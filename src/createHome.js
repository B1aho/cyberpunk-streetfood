import { removePrevPage } from "./removePrevPage";
import { hr } from "./hr";

import cocktail from "./assets/images/soda-2.png";
import logo from "./assets/images/neon-logo.png";

export function createHome() {
    if (document.querySelector("#home-main"))
        return
    
    const contentDiv = document.querySelector("#content")
    removePrevPage()
    const main = document.createElement("div")
    main.classList.add("page")
    main.id = "home-main"
    // Create home page description
    const descCard = document.createElement("div")
    descCard.classList.add("home-description")
    const header = document.createElement("h1")
    header.innerText = "Neon Grill"
    const secondHeader = document.createElement("h2")
    secondHeader.innerText = "Feeding The Future Since 2088"
    const description = document.createElement("p")
    const description1 = document.createElement("p")
    const description2 = document.createElement("p")
    description.innerText = "Neon Grill is more than just street food; it's a culinary rebellion against the mundane.\
     Born in the heart of the neon jungle, we fuse the grit of back-alley diners with the tech of tomorrow. "
    description1.innerText = "Our chefs? Part artists, part engineers, crafting dishes that glow as bright as the city’s skyline. \
     Every bite is a taste of 2088—powered by innovation, spiced with rebellion, and served with a side of adrenaline.\
     Whether you're a wanderer in the grid or a corporate renegade refueling for the next hack, we’ve got the\
     perfect meal to light up your circuits."
    description2.innerText = "Burgers that pulse with flavor, wraps that pack a punch, and \
     drinks that electrify your senses—this is street food redefined.\n\nPlug in. Power up. Bite down.\
     Welcome to Neon Grill, where the future tastes better."
    descCard.append(header, secondHeader, hr(), description, hr(), description1, hr(), description2)
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
    imgCard.append(secondImg, firstImg)
    main.append(imgCard, descCard)
    contentDiv.append(main)
};