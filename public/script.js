const firebaseConfig = {
    apiKey: "AIzaSyBAF2b_tCoaXo_hnLmhtFGqNH1jpsc8Vn8",
    authDomain: "pawstel-122d4.firebaseapp.com",
    databaseURL: "https://pawstel-122d4-default-rtdb.firebaseio.com",
    projectId: "pawstel-122d4",
    storageBucket: "pawstel-122d4.firebasestorage.app",
    messagingSenderId: "730701142339",
    appId: "1:730701142339:web:10cc3eb0734991269c37f6",
    measurementId: "G-ZWJ7VYJ77L"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Form submission
document.getElementById('catForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = {
        ownerName: document.getElementById('ownerName').value,
        contactNumber: document.getElementById('contactNumber').value,
        emailId: document.getElementById('emailId').value,
        address: document.getElementById('address').value,
        catName: document.getElementById('catName').value,
        catBreed: document.getElementById('catBreed').value,
        catDOB: document.getElementById('catDOB').value,
        catAge: document.getElementById('catAge').value,
        vaccinationCompleted: document.getElementById('vaccinationCompleted').checked,
        lastVaccinationDate: document.getElementById('lastVaccinationDate').value,
        pendingVaccine: document.getElementById('pendingVaccine').value,
        dueVaccinationDate: document.getElementById('dueVaccinationDate').value,
        lastDewormingDate: document.getElementById('lastDewormingDate').value,
        healthCondition: document.getElementById('healthCondition').value,
        specialRequest: document.getElementById('specialRequest').value,
        boardingType: document.getElementById('boardingType').value,
        wetFood: document.getElementById('wetFood').value
    };

    database.ref('cats/').push(formData).then(() => {
        alert('Cat details submitted successfully!');
        document.getElementById('catForm').reset();
    }).catch(error => {
        alert('Error submitting form: ' + error.message);
    });
});
