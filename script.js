const container = document .getElementById('container');
const RegistrierenBtn = document .getElementById('Registrieren');
const AnmeldenBtn = document .getElementById('Anmelden');
RegistrierenBtn. addEventListener('click', ()=>{container.classList .addEventListener.add("active");});
AnmeldenBtn. addEventListener('click', ()=>{container.classList.remove("active");});