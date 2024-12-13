import { removePrevPage } from "./removePrevPage";

export function createBooking() {
    const contentDiv = document.querySelector("#content")
    if (document.querySelector("#form"))
        return
    removePrevPage()
    
    contentDiv.append(createOrderForm())
};

// Form creation
const createOrderForm = () => {
    // Create form div
    const form = document.createElement('div')
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
    deliveryLabel.textContent = 'Delivery Method'
  
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
  
      deliveryDiv.append(optionLabel, checkbox)
    });
  
    const agreementCheckbox = document.createElement('input')
    agreementCheckbox.type = 'checkbox'
    agreementCheckbox.id = 'agreement'
    agreementCheckbox.name = 'agreement'
    agreementCheckbox.required = true
  
    const agreementLabel = document.createElement('label')
    agreementLabel.setAttribute('for', 'agreement')
    agreementLabel.textContent = '"I consent to a Neon Bites operator contacting me through NeuroLink to refine my order preferences, diving deep into the depths of my subconscious culinary desires."'
  
    form.append(nameLabel, nameInput, neuroLabel, neuroInput, locationLabel, locationSelect, deliveryLabel, deliveryDiv, agreementCheckbox, agreementLabel)
    return form;
  };
  
  // Вызов функции для создания формы
  createOrderForm();
  

/*
<div id="form" style="display: none;">
            <label for="name">Name</label>
            <input type="text" id="name">
            <label for="NeuroLink">NeuroLink ID</label>
            <input type="number" required>
            <label for="location">Delivery Location (Sector/Block)</label>
            <select>
                <option value="1">Sector 1</option>
                <option value="2">Sector 2</option>
                <option value="3">Sector 3</option>
                <option value="311">Block 311</option>
            </select>
            <label for="delivery">Delivery Method</label>
            <div id="delivery">
                <label for="drone">Drone Delivery</label>
                <input type="checkbox" id="drone" value="drone" name="delivery">
                <label for="self">Pick Up at Sector 9</label>
                <input type="checkbox" id="self" value="self" name="delivery">
            </div>
            <input type="checkbox" name="agreement" id="agreement" required>
            <label for="agreement">"I consent to a Neon Bites operator contacting me through NeuroLink to refine my order preferences, diving deep into the depths of my subconscious culinary desires."</label>
        </div>
*/