import { 
    createAbout, 
    createBooking, 
    createContact, 
    createHome, 
    createMenu 
} from "./createContent";

export const navTabs = {
    menu: {
        onClick: createMenu,
    },
    home: {
        onClick: createHome,
    },
    about: {
        onClick: createAbout,
    },
    booking: {
        onClick: createBooking,
    },
    contact: {
        onClick: createContact,
    },
};

document.addEventListener("DOMContentLoaded", function() {
    const keys = Object.keys(navTabs)
    keys.forEach(key => {
        navTabs[key].ref = document.querySelector(`#${key}`)
        navTabs[key].ref.addEventListener("click", navTabs[key].onClick)
    })
    
})