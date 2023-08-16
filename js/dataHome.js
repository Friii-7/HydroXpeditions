 const firebaseConfig = {
    apiKey: "AIzaSyCJh4_hu-2S_2nmYlY4CETDH0yDbTa-mqY",
    authDomain: "hydroxpeditions-contact.firebaseapp.com",
    databaseURL: "https://hydroxpeditions-contact-default-rtdb.firebaseio.com",
    projectId: "hydroxpeditions-contact",
    storageBucket: "hydroxpeditions-contact.appspot.com",
    messagingSenderId: "543977525459",
    appId: "1:543977525459:web:c00c420fd65402418b8426",
    measurementId: "G-DFWL8W4QVH"
  };


  // // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const contactFormDB = firebase.database().ref("hydroHome");

document.getElementById("home-data").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  const location = getElementVal("location");
  const date = getElementVal("date");
  const guests = getElementVal("guests");

  console.log(location, date, guests);

  saveMessages(location, date, guests);

  const alertBox = document.querySelector(".alert");
  alertBox.style.display = "block";

  setTimeout(() => {
    alertBox.style.display = "none";
  }, 3000);

  document.getElementById("home-data").reset();
}

function saveMessages(location, date, guests) {
  const newContactForm = contactFormDB.push();
  newContactForm.set({
    location,
    date,
    guests
  });
}

function getElementVal(id) {
  return document.getElementById(id).value;
}
