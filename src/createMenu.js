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
    cards.push(createCard(burger1, "Cyber Patty", "Бургер с 'кибер-котлетой' из синтетического мяса"))
    cards.push(createCard(chips, "Quantum fries", "Картофель фри, облитый флуоресцентным соусом"))
    cards.push(createCard(hotdog, "NeuroDog", "Хот-дог с добавками, которые стимулируют мозг"))
    cards.push(createCard(burger2, "Neon Stack", "Яркий, как неоновые огни ночного города"))
    cards.push(createCard(tacos, "Glitch Wrap", "Буррито с такой острой начинкой, что зависнет мозг"))
    cards.push(createCard(burger3, "HoloBurger", "Настолько технологичный, что выглядит как голограмма"))
    cards.push(createCard(donut, "Cyber Glaze", "Пончик, покрытый глазурью, 'которая светится' в темноте"))
 
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
