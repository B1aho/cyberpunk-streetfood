export function highlight(targetBtn) {
    const btns = document.querySelectorAll(".nav-btn")
    btns.forEach(btn => btn.classList.remove("active"))
    targetBtn.classList.add("active")
}