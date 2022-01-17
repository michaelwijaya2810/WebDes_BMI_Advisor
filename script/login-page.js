// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCpOVon4b2SYUXpZ5cfonuKlfr5WZoTNQo",
    authDomain: "bmidatabase-ca960.firebaseapp.com",
    projectId: "bmidatabase-ca960"
});

async function getUser(email, password) {
    var db = firebase.firestore();
    
    db.collection('users').doc(email).get()
    .then((doc) => {
        if(doc.exists) {
            let data = doc.data();
            // console.log("Document data: ", data);
            if(password != data.password) {
                alert('Incorrect password.');
                return;
            }
            else {
                // alert("Login success!");
                openLogin();
            }
        }
        else {
            console.log("Invalid email address.");
            alert('Email not registered.');
        }
    }).catch((error) => {
        console.log("Error getting document: " + error);
    });

}

function validateLogin() {
    let valEmail = document.getElementById('inputEmail').value;
    let valPassword = document.getElementById('inputPassword').value;

    if(valEmail == '') {
        alert('Please insert your email address.');
    } else if (valEmail.includes('@') == false && valEmail.includes('.') == false){
        alert('You need to insert correct email format!');
    } else if (valPassword == ''){
        alert('Please insert your password.');
    } else {
        localStorage.setItem("email", valEmail);
        getUser(valEmail, valPassword);
    }
}

function openLogin() {
    window.location.replace("./home.html");
}