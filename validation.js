document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    let valid = true;
    let messages = [];

    // Nome próprio
    const firstName = document.getElementById('first-name').value.trim();
    if (firstName === "") {
      valid = false;
      messages.push("First name is required.");
    }

    // Apelido
    const lastName = document.getElementById('last-name').value.trim();
    if (lastName === "") {
      valid = false;
      messages.push("Last name is required.");
    }

    // Email
    const email = document.getElementById('email').value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      valid = false;
      messages.push("Email must be valid.");
    }

    // Postal code
    const postal = document.getElementById('postal-code').value.trim();
    if (!/^\d{4}-\d{3}$/.test(postal)) {
      valid = false;
      messages.push("Postal code must be in DDDD-DDD format.");
    }

    // Country
    const country = document.getElementById('country').value;
    if (country === "" || country === "Select country") {
      valid = false;
      messages.push("Country must be selected.");
    }

    // Card type (radio)
    if (![...document.getElementsByName('card-type')].some(e => e.checked)) {
      valid = false;
      messages.push("Please select a credit card type.");
    }

    // Card number
    const card = document.getElementById('card-number').value.trim();
    if (!/^\d{13,19}$/.test(card)) {
      valid = false;
      messages.push("Card number must be 13 to 19 digits.");
    }

    // Expiry date
    const expiry = document.getElementById('expiry').value;
    if (!expiry) {
      valid = false;
      messages.push("Expiry date is required.");
    }

    // CVV
    const cvv = document.getElementById('cvv').value.trim();
    if (!/^\d{3,4}$/.test(cvv)) {
      valid = false;
      messages.push("CVV must be 3 or 4 digits.");
    }

    // Terms
    if (!document.getElementById('terms').checked) {
      valid = false;
      messages.push("You must agree to the terms and conditions.");
    }

    // Se não for válido, cancelar envio e mostrar alerta
    if (!valid) {
      event.preventDefault();
      alert(messages.join('\n'));
    }
  });
});
