const firebaseConfig = {
  apiKey: "AIzaSyCJh4_hu-2S_2nmYlY4CETDH0yDbTa-mqY",
  authDomain: "hydroxpeditions-contact.firebaseapp.com",
  databaseURL: "https://hydroxpeditions-contact-default-rtdb.firebaseio.com",
  projectId: "hydroxpeditions-contact",
  storageBucket: "hydroxpeditions-contact.appspot.com",
  messagingSenderId: "543977525459",
  appId: "1:543977525459:web:6a88cb9e8f9deb4a8b8426",
  measurementId: "G-CD9BEZLYN6",
};

// // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const contactFormDB = firebase.database().ref("hydroContact");

document.getElementById("hydroContact").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  const name = getElementVal("name");
  const email = getElementVal("email");
  const number = getElementVal("number");
  const massage = getElementVal("message");

  console.log(name, email, number, massage);

  saveMessages(name, email, number, massage);

  const alertBox = document.querySelector(".alert");
  alertBox.style.display = "block";

  setTimeout(() => {
    alertBox.style.display = "none";
  }, 3000);

  document.getElementById("hydroContact").reset();
}

function saveMessages(name, email, number, massage) {
  const newContactForm = contactFormDB.push();
  newContactForm.set({
    name,
    email,
    number,
    massage,
  });
}

function getElementVal(id) {
  return document.getElementById(id).value;
}

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
