export function createCarousel(imageNodes) {
    const carouselWrapper = document.createElement("div")
    const cards = []
    
    imageNodes.forEach(img => {
        const card = document.createElement("div")
        card.classList.add("menu-card")
        const desc = document.createElement("div")
        desc.classList.add("menu-card-desc")
        const descHeader = document.createElement("h1")
        descHeader.classList.add("menu-card-header")
        const descContent = document.createElement("h4")
        descContent.classList.add("menu-card-content")
        desc.append(descHeader, descContent)
        card.append(img, desc)
        cards.push(card)
    });

    cards.forEach(card => carouselWrapper.append(card))

    let isDown = false
    let startX
    let scrollLeft

    carouselWrapper.addEventListener("pointerdown", () => {
        isDown = true
        carouselWrapper.classList.add("active-slider")
        startX = e.pageX - carouselWrapper.offsetLeft;
        scrollLeft = carouselWrapper.scrollLeft;
    })

    carouselWrapper.addEventListener('mouseleave', () => {
        isDown = false;
        carouselWrapper.classList.remove("active-slider");
    });

    carouselWrapper.addEventListener("pointerup", () => {
        isDown = false;
        carouselWrapper.classList.remove("active-slider");
    });

    carouselWrapper.addEventListener("pointermove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carouselWrapper.offsetLeft;
        const SCROLL_SPEED = 3;
        const walk = (x - startX) * SCROLL_SPEED;
        carouselWrapper.scrollLeft = scrollLeft - walk;
    });

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