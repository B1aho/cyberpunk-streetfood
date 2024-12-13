import { createCarousel } from "./carousel";
import { removePrevPage } from "./removePrevPage";

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
    const chipsImg = document.createElement("img")
    chipsImg.src = chips
    imageNodes.push(chipsImg)
    const hotdogImg = document.createElement("img")
    hotdogImg.src = hotdog
    imageNodes.push(hotdogImg)
    const burgerTwo = document.createElement("img")
    burgerTwo.src = burger2
    imageNodes.push(burgerTwo)
    const tacosImg = document.createElement("img")
    tacosImg.src = tacos
    imageNodes.push(tacosImg)
    const burgerThree = document.createElement("img")
    burgerThree.src = burger3
    imageNodes.push(burgerThree)
    const donutImg = document.createElement("img")
    donutImg.src = donut
    imageNodes.push(donutImg)

    contentDiv.append(createCarousel(imageNodes))

}