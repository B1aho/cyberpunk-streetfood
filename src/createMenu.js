import { createCarousel } from "./carousel";
import { removePrevPage } from "./removePrevPage";
import { highlight } from "./buttonHighlight";

import burger1 from "./assets/images/carousel/burger1.jpg";
import burger2 from "./assets/images/carousel/burger2.jpg";
import burger3 from "./assets/images/carousel/burger3.jpg";
import chips from "./assets/images/carousel/chips.jpg";
import donut from "./assets/images/carousel/donut.jpg";
import hotdog from "./assets/images/carousel/hotdog.jpg";
import tacos from "./assets/images/carousel/tacos.jpg";


export function createMenu(e) {
    if (document.querySelector(".carousel"))
        return

    const contentDiv = document.querySelector("#content")
    highlight(e.target)
    removePrevPage()
    const cards = []
    cards.push(createCard(burger1, "Cyber Patty", "A burger with a 'cyber-patty' made from synthetic meat"))
    cards.push(createCard(chips, "Quantum fries", "Fries drenched in fluorescent sauce"))
    cards.push(createCard(hotdog, "NeuroDog", "A hot dog with brain-boosting additives"))
    cards.push(createCard(burger2, "Neon Stack", "A burger as vibrant as the neon lights of a night city"))
    cards.push(createCard(tacos, "Glitch Wrap", "A burrito with a filling so spicy it’ll crash your mind"))
    cards.push(createCard(burger3, "HoloBurger", "A burger so advanced it looks like a hologram"))
    cards.push(createCard(donut, "Cyber Glaze", "A donut glazed with frosting that glows in the dark"))
 
    contentDiv.append(createCarousel(cards))
}

// Create card from img-source, and text content for card-header, card-description
function createCard(img, header, description) {
    const card = document.createElement("div")
    card.classList.add("menu-card")
    const image = document.createElement("img")
    image.src = img
    const desc = document.createElement("div")
    desc.classList.add("menu-card-desc")
    const descHeader = document.createElement("h1")
    descHeader.innerText = header
    descHeader.classList.add("menu-card-header")
    const descContent = document.createElement("p")
    descContent.innerText = description
    descContent.classList.add("menu-card-content")
    desc.append(descHeader, descContent)
    card.append(image, desc)
    card.ondragstart = function () {
        return false;
    };
    return card
}
