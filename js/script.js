
let navbar = document.querySelector(".header .flex .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

document.querySelectorAll('input[type="number"]').forEach((inputNumber) => {
  inputNumber.oninput = () => {
    if (inputNumber.value.length > inputNumber.maxLength)
      inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
  };
});

AOS.init({
  duration: 400,
  delay: 200,
});


AOS.init();



const popupButtons = document.querySelectorAll('.btn2');
const popupCloseButtons = document.querySelectorAll('.popup-close-button');
const popups = document.querySelectorAll('.popup');

popupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-popup-target');
        const popup = document.getElementById(target);
        popup.style.display = 'flex';
    });
});

popupCloseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup');
        popup.style.display = 'none';
    });
});



