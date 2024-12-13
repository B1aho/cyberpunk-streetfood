export function createCarousel(cards) {
    const carouselWrapper = document.createElement("div")
    carouselWrapper.classList.add("carousel")
    cards.forEach(card => carouselWrapper.append(card))

    let startX;
    let isDown = false;
    let scrollLeft;

    carouselWrapper.addEventListener("mousedown", (e) => mouseIsDown(e));
    carouselWrapper.addEventListener("mouseup", (e) => mouseUp(e));
    carouselWrapper.addEventListener("mouseleave", (e) => mouseLeave(e));
    carouselWrapper.addEventListener("mousemove", (e) => mouseMove(e));

    function mouseIsDown(e) {
        isDown = true;
        startX = e.pageX
        scrollLeft = carouselWrapper.scrollLeft;
        carouselWrapper.classList.add("active-slider")
    }
    function mouseUp(e) {
        isDown = false;
        carouselWrapper.classList.remove("active-slider")
    }
    function mouseLeave(e) {
        isDown = false;
        carouselWrapper.classList.remove("active-slider")
    }
    function mouseMove(e) {
        if (isDown) {
            e.preventDefault();
            const x = e.pageX
            const walkX = (x - startX) * 3;
            carouselWrapper.scrollLeft = scrollLeft - walkX; // Базовое scrollLeft + смещение
            console.log({ x, startX, walkX, scrollLeft, scrollLeftW: carouselWrapper.scrollLeft });

        }
    }
    carouselWrapper.classList.add("page")

    return carouselWrapper
}
