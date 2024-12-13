import { createHome } from "./createHome";
import { createContact } from "./createContact";
import { createBooking } from "./createBooking";
import { createMenu } from "./createMenu";

export const navTabs = {
    menu: {
        onClick: createMenu,
    },
    home: {
        onClick: createHome,
    },
    booking: {
        onClick: createBooking,
    },
    contact: {
        onClick: createContact,
    },
};

document.addEventListener("DOMContentLoaded", function() {
    createHome()
    const keys = Object.keys(navTabs)
    keys.forEach(key => {
        navTabs[key].ref = document.querySelector(`#${key}`)
        navTabs[key].ref.addEventListener("click", navTabs[key].onClick)
    })
})