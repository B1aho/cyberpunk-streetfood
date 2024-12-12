import cocktail from "./assets/images/cocktail-1.png";
import logo from "./assets/images/neon-logo.png";
import { createCarousel } from "./carousel";

import burger1 from "./assets/images/carousel/burger1.jpg";
import burger2 from "./assets/images/carousel/burger2.jpg";
import burger3 from "./assets/images/carousel/burger3.jpg";
import chips from "./assets/images/carousel/chips.jpg";
import donut from "./assets/images/carousel/donut.jpg";
import hotdog from "./assets/images/carousel/hotdog.jpg";
import tacos from "./assets/images/carousel/tacos.jpg";

const contentDiv = document.querySelector("#content")

export function createMenu() {
    removePrevPage()
    const imageNodes = []
    const burgerOne = document.createElement("img")
    burgerOne.src = burger1
    imageNodes.push(burgerOne)
    const burgerTwo = document.createElement("img")
    burgerTwo.src = burger2
    imageNodes.push(burgerTwo)
    const burgerThree = document.createElement("img")
    burgerThree.src = burger3
    imageNodes.push(burgerThree)
    const chipsImg = document.createElement("img")
    chipsImg.src = chips
    imageNodes.push(chipsImg)
    const donutImg = document.createElement("img")
    donutImg.src = donut
    imageNodes.push(donutImg)
    const hotdogImg = document.createElement("img")
    hotdogImg.src = hotdog
    imageNodes.push(hotdogImg)
    const tacosImg = document.createElement("img")
    tacosImg.src = tacos
    imageNodes.push(tacosImg)

    contentDiv.append(createCarousel(imageNodes))

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
    firstImg.src = cocktail
    secondImg.src = logo
    // Append all elements to the DOM
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