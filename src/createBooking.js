import { removePrevPage } from "./removePrevPage";
import { highlight } from "./buttonHighlight";
import { hr } from "./hr";

export function createBooking(e) {
  highlight(e.target)
  const contentDiv = document.querySelector("#content")
  if (document.querySelector("#form"))
    return
  removePrevPage()

  contentDiv.append(createOrderForm())
};

// Form creation
const createOrderForm = () => {
  // Create form div
  const form = document.createElement('form')
  form.id = 'form'

  const nameLabel = document.createElement('label')
  nameLabel.setAttribute('for', 'name')
  nameLabel.textContent = 'Name'

  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.id = 'name'

  const neuroLabel = document.createElement('label')
  neuroLabel.setAttribute('for', 'NeuroLink')
  neuroLabel.textContent = 'NeuroLink ID'

  const neuroInput = document.createElement('input')
  neuroInput.type = 'number'
  neuroInput.required = true

  const locationLabel = document.createElement('label')
  locationLabel.setAttribute('for', 'location')
  locationLabel.textContent = 'Delivery Location (Sector/Block)'

  const locationSelect = document.createElement('select')

  const locations = [
    { value: '1', text: 'Sector 1' },
    { value: '2', text: 'Sector 2' },
    { value: '3', text: 'Sector 3' },
    { value: '311', text: 'Block 311' },
  ];

  locations.forEach(loc => {
    const option = document.createElement('option')
    option.value = loc.value
    option.textContent = loc.text
    locationSelect.append(option)
  });

  const deliveryLabel = document.createElement('label')
  deliveryLabel.setAttribute('for', 'delivery')
  deliveryLabel.textContent = 'Delivery Method:'
  deliveryLabel.id = "delivery-heading"

  const deliveryDiv = document.createElement('div')
  deliveryDiv.id = 'delivery'

  const deliveryOptions = [
    { id: 'drone', value: 'drone', text: 'Drone Delivery' },
    { id: 'self', value: 'self', text: 'Pick Up at Sector 9' },
  ];

  deliveryOptions.forEach(option => {
    const optionLabel = document.createElement('label')
    optionLabel.setAttribute('for', option.id)
    optionLabel.textContent = option.text

    const checkbox = document.createElement('input')
    checkbox.type = 'radio'
    checkbox.id = option.id
    checkbox.value = option.value
    checkbox.name = 'delivery'
    const wrapDelivery = document.createElement("div")
    wrapDelivery.classList.add("wrap-delivery")
    wrapDelivery.append(optionLabel, checkbox)
    deliveryDiv.append(wrapDelivery)
  });

  const agreementCheckbox = document.createElement('input')
  agreementCheckbox.type = 'checkbox'
  agreementCheckbox.id = 'agreement'
  agreementCheckbox.name = 'agreement'
  agreementCheckbox.required = true

  const agreementLabel = document.createElement('label')
  agreementLabel.setAttribute('for', 'agreement')
  agreementLabel.textContent = '"I consent to a "Neon Grill" operator contacting me through NeuroLink to refine my order preferences, diving deep into the depths of my subconscious culinary desires."'

  const agreementDiv = document.createElement("div")
  agreementDiv.id = "agreement-wrap"
  agreementDiv.append(agreementLabel, agreementCheckbox)

  const button = document.createElement("button")
  button.textContent = "Submit!"
  button.type = "submit"
  button.id = "submit"
  
  form.onsubmit = (e) => {
    return false
  }

  form.append(nameLabel, nameInput, hr(), neuroLabel, neuroInput, hr(), locationLabel, locationSelect, hr(), deliveryLabel, deliveryDiv, hr(), agreementDiv, button)
  form.classList.add("page")
  return form;
};

// Вызов функции для создания формы
createOrderForm();