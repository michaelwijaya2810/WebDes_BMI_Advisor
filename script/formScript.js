var selectedGender = "Male";

function show() {
    var password = document.getElementById('pass');
    var icon = document.getElementById('lock');

    if (password.type === "password"){
        password.type = "text";
        icon.style.color = "#548CFF";
    }
    else{
        password.type = "password";
        icon.style.color = "#808080";
    }
}

function validateLogin() {
    var username = document.getElementById('user').value;
    var password = document.getElementById('pass').value;

    if(username == ""){
        alert("Please insert your username");
    } else if(password == ""){
        alert("Please insert your password");
    } else {
        window.location.replace = "https://www.tutorialrepublic.com/";
    }
}

function pickGender(picked){
    selectedGender = picked;
}

function validateRegister() {
    var username = document.getElementById('user').value;
    var gender = selectedGender
    var dateOfBirth = document.getElementById('dob').value;
    var email = document.getElementById('mail').value;
    var password = document.getElementById('pass').value;

    if(username == ""){
        alert("Please insert username");
    } else if(dateOfBirth == ""){
        alert("Please insert date of birth");
    } else if(email == ""){
        alert("Please insert email");
    } else if(password == ""){
        alert("Please insert password");
    } else {
        alert("Register Successful");
    }
}