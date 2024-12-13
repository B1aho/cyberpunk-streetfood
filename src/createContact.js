import { removePrevPage } from "./removePrevPage";

export function createContact() {
    if (document.querySelector("#about-wrap"))
        return

    const contentDiv = document.querySelector("#content")
    removePrevPage()
    const textWrapper = document.createElement("div")
    textWrapper.id = "about-wrap"

    const header = document.createElement("h1")
    header.innerText = "Contact Us: Connecting the Neon Grid"
    const welcome = document.createElement("p")
    welcome.innerText = "Welcome to 2108, where flavors meet the future! Got a question, craving, or just want to send a digital high-five? Our neon-drenched network is always open for you."
    const reachUs = document.createElement("h3")
    reachUs.innerText = "Reach Us Via:"
    const reachUsP = document.createElement("p")
    reachUsP.innerText = "💬 HoloChat: Ping us in real-time.\n📡 NeuroLink: Sync your thoughts directly to our AI assistant for a seamless experience.\n🚀 Drone Delivery SOS: Need a last-minute burrito drop? Just tap, and a drone will zoom your way faster than a hovercar in the fast lane."
    const warning = document.createElement("h3")
    warning.innerText = "Warning:"
    const warningP = document.createElement("p")
    warningP.innerText = "Sending us messages via retro tech like email may result in delays. Upgrade your comms, citizen!\n\nThe future tastes better when we’re connected. See you in the grid✨"
    
    textWrapper.append(header,welcome, document.createElement("hr") ,reachUs, reachUsP, document.createElement("hr"), warning, warningP)
    contentDiv.append(textWrapper)
};