import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";

import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";


//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgZN_i-mYI39eAGwilbuCO9PXif0W7fcE",
  authDomain: "tripma-69a71.firebaseapp.com",
  projectId: "tripma-69a71",
  storageBucket: "tripma-69a71.appspot.com",
  messagingSenderId: "1037001269472",
  appId: "1:1037001269472:web:806d246ce3c92bcd937085"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Collection Reference
const colRef = collection(db, 'Trains');

getDocs(colRef)
  .then((snapshot) => {
    let Trains = [];
    snapshot.docs.forEach((doc) => {
      Trains.push({...doc.data(), id: doc.id});
    });
    console.log(Trains);

// Get the train-wrap div element
const trainWrap = document.querySelector('.train-wrap');

// Loop through the Trains array and create the HTML elements dynamically
Trains.forEach(train => {
  // Create the HTML elements for each train
  const row1 = document.createElement('div');
  row1.classList.add('row');
  row1.innerHTML = `<span id="trainNumber">${train.trainNumber}</span><span id="trainName">${train.trainName}</span>`;

  const row2 = document.createElement('div');
  row2.classList.add('row');
  const departureTime = new Date(train.departureTime);
  const arrivalTime = new Date(train.arrivalTime);
  const durationInMs = arrivalTime - departureTime;
  const durationInHrs = Math.floor(durationInMs / (1000 * 60 * 60));
  const durationInMins = Math.floor((durationInMs % (1000 * 60 * 60)) / (1000 * 60));
  row2.innerHTML = `<span id="departureTime">${departureTime.toLocaleTimeString()}</span><span id="duration">${durationInHrs}h ${durationInMins}m</span><span id="arrivalTime">${arrivalTime.toLocaleTimeString()}</span>`;

  const row3 = document.createElement('div');
  row3.classList.add('row');
  row3.innerHTML = `<span id="source">${train.source}</span><span id="two">---To---</span><span id="destination">${train.destination}</span>`;

  const bookBtn = document.createElement('button');
  bookBtn.classList.add('book');
  bookBtn.setAttribute('id', 'bookBtn');
  bookBtn.textContent = 'Book';
  
  const btnDiv = document.createElement('div');
  btnDiv.classList.add('btn');
  btnDiv.appendChild(bookBtn);

  const trainDiv = document.createElement('div');
  trainDiv.classList.add('Train');
  trainDiv.appendChild(row1);
  trainDiv.appendChild(row2);
  trainDiv.appendChild(row3);
  trainDiv.appendChild(btnDiv);

  // Append the train div to the train-wrap div
  trainWrap.appendChild(trainDiv);
});

  })
  .catch(err => {
    console.log(err.message);
  });
  