async function addUser(name, gender, dob, email, password) {
    // Initialize Cloud Firestore through Firebase
    firebase.initializeApp({
        apiKey: "AIzaSyCpOVon4b2SYUXpZ5cfonuKlfr5WZoTNQo",
        authDomain: "bmidatabase-ca960.firebaseapp.com",
        projectId: "bmidatabase-ca960"
    });
    
    var db = firebase.firestore();
    
    db.collection("users").doc(email).set({
        name: name,
        gender: gender,
        dob: dob,
        password: password
    })
    .then(() => {
        console.log("Data added.");
        alert("Register success!");
        openLogin();
    })
    .catch((error) => {
        console.log("Error: " + error);
    });
    
}

function validateRegister() {
    let valName = document.getElementById('inputName').value;
    let valGender = document.getElementById('inputGender');
    let valDob = document.getElementById('inputDob').value;
    let valEmail = document.getElementById('inputEmail').value;
    let valPassword = document.getElementById('inputPassword').value;
    let valConfPassword = document.getElementById('confirmPassword').value;

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    let gender = valGender.options[valGender.selectedIndex].value;

    if(valName == ''){
        alert('Please insert your name!');
    } else if (gender == '') {
        alert('Please choose your gender!');
    } else if (valDob == ''){
        alert('Please insert your date of birth!');
    } else if (valDob >= date){
        alert('Are you from the future?');
    } else if (valEmail == ''){
        alert('Please insert your email address!');
    } else if (valEmail.includes('@') == false && valEmail.includes('.') == false){
        alert('You need to insert correct email format!');
    } else if (valPassword == ''){
        alert('Please insert your password.');
    } else if (valConfPassword == ''){
        alert('Please insert the Confirm Password field.');
    } else if (valPassword != valConfPassword){
        alert('Password and confirm password did not match.');
    } else {
        addUser(valName, gender, valDob, valEmail, valPassword);
    }
}

function openLogin() {
    window.location.replace("./login-page.html");
}