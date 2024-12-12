export function createCarousel(imageNodes) {
    const carouselWrapper = document.createElement("div")
    carouselWrapper.classList.add("carousel")
    const cards = []

    imageNodes.forEach(img => {
        const card = document.createElement("div")
        card.classList.add("menu-card")
        const desc = document.createElement("div")
        desc.classList.add("menu-card-desc")
        const descHeader = document.createElement("h1")
        descHeader.innerText = "Cyber dish"
        descHeader.classList.add("menu-card-header")
        const descContent = document.createElement("h4")
        descContent.classList.add("menu-card-content")
        desc.append(descHeader, descContent)
        card.append(img, desc)
        cards.push(card)
        card.ondragstart = function () {
            return false;
        };
    });

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


    return carouselWrapper
}

/*
<div class="card">
        <img src="https://colorlib.com/preview/theme/seogo/img/case_study/1.png">
        <div class="content">
          <h1>Product Design</h1>
          <h3>UI/UX, Design</h3>
        </div>
      </div>
      
      */