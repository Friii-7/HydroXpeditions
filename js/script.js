
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


//  const nodemailer = require('nodemailer');

// // Create a transporter object using SMTP transport
// const transporter = nodemailer.createTransport({
//   service: 'Gmail', // e.g., 'Gmail'
//   auth: {
//     user: 'hydroxpeditions@gmail.com',
//     pass: 'Hydro101224',
//   },
// });

// // Function to send email notifications
// function sendNotification() {
//   const mailOptions = {
//     from: 'hydroxpeditions@gmail.com',
//     to: 'recipient@email.com', // recipient's email address
//     subject: 'Website Visit Notification',
//     text: 'Someone has visited your website!',
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log('Error sending email: ' + error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
// }

// Call the sendNotification function when someone visits your website
sendNotification();

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-4FRH5ECH54');