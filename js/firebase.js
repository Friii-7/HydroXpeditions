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
  const location = getElementVal("location");
  const date1 = getElementVal("date");
  const guests = getElementVal("guests");

  console.log(name, email, number, massage, location, date1, guests);

  saveMessages(name, email, number, massage, location, date1, guests);

  const alertBox = document.querySelector(".alert");
  alertBox.style.display = "block";

  setTimeout(() => {
    alertBox.style.display = "none";
  }, 3000);

  document.getElementById("form").reset();
}

function saveMessages(name, email, number, massage, location, date1, guests) {
  const newContactForm = contactFormDB.push();
  newContactForm.set({
    name,
    email,
    number,
    massage,
    location,
    date1,
    guests
  });
}

function getElementVal(id) {
  return document.getElementById(id).value;
}
