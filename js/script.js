
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
const popupCloseButtons1 = document.querySelectorAll('.popup-close-button1');
const popupCloseButtons2 = document.querySelectorAll('.popup-close-button2');
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
popupCloseButtons1.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup');
        popup.style.display = 'none';
    });
});

popupCloseButtons2.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup');
        popup.style.display = 'none';
    });
});

// Función para obtener el número de visitantes desde el almacenamiento local
function getVisitorCount() {
    let count = localStorage.getItem('visitorCount');
    return count ? parseInt(count) : 0;
}

// Función para incrementar el número de visitantes
function incrementVisitorCount() {
    let count = getVisitorCount();
    count++;
    localStorage.setItem('visitorCount', count);
}

// Función para mostrar el número de visitantes en la consola
function showVisitorCount() {
    const visitorCount = getVisitorCount();
    console.log(`Número de visitantes: ${visitorCount}`);
}

// Incrementar el contador de visitantes cada vez que alguien carga la página
incrementVisitorCount();

// Mostrar el número de visitantes en la consola (puedes quitar esta línea para mantenerlo privado)
showVisitorCount();





