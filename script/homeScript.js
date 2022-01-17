var bmiStatus = document.getElementsByClassName("bmi-status")[0];
var intro = document.getElementsByClassName("bmi-plan-intro")[0];
var goal = document.getElementsByClassName("plan-goal-img")[0];
var exercise = document.getElementsByClassName("plan-exercise-img")[0];
var diet = document.getElementsByClassName("plan-diet-img")[0];

let myChart = document.getElementById('historyChart').getContext('2d');

var arrBmi = [];
var arrCount = [];
var countBmiData = 0;

function loadChart() {
    let chartStatus = Chart.getChart('historyChart');
    if(chartStatus != undefined) {
        chartStatus.destroy();
    }

    let testChart = new Chart(myChart, {
        type: 'line',
        data:{
            labels: arrCount, 
            datasets:[{
                label: 'BMI CHART',
                data: arrBmi,
                borderColor: [
                    "rgb(30, 144, 255)"
                ],
                borderWidth: 1
            }]
        },
        options:{
            
        }
    });

}

function load(){
    document.getElementById('wei').value = "50"
    document.getElementById('hei').value = "150"
}

function calculate(){
    var weight = document.getElementById("wei").value
    var height = document.getElementById("hei").value

    let bmi = parseFloat((weight/ Math.pow(height/100, 2)).toFixed(2));
    
    arrBmi = [];
    arrCount = [];
    updateUserData(weight, height, bmi);
    getData();
    updateAdvisorInfo(bmi);

    document.querySelector('.obj .BMI').innerText = bmi;

    if (bmi < 18.5){
        document.querySelector('.obj .result').innerText = 'UNDERWEIGHT!'
        document.querySelector('.obj .BMI').style.color = '#3f51b5';
        document.querySelector('.obj .result').style.color = "#3f51b5";
    } else if(bmi >= 18.5 && bmi < 25){
        document.querySelector('.obj .result').innerText = 'NORMAL!'
        document.querySelector('.obj .BMI').style.color = '#0f4';
        document.querySelector('.obj .result').style.color = "#0f4";
    } else if(bmi >= 25 && bmi < 31){
        document.querySelector('.obj .result').innerText = 'OVERWEIGHT!'
        document.querySelector('.obj .BMI').style.color = '#FFC107';
        document.querySelector('.obj .result').style.color = "#FFC107";
    } else if(bmi >= 31 && bmi < 35){
        document.querySelector('.obj .result').innerText = 'OBESE!'
        document.querySelector('.obj .BMI').style.color = '#FF0000';
        document.querySelector('.obj .result').style.color = "#FF0000";
    } else if(bmi >= 35){
        document.querySelector('.obj .result').innerText = 'EXTREMELY OBESE!'
        document.querySelector('.obj .BMI').style.color = '#8B0000 ';
        document.querySelector('.obj .result').style.color = '#8B0000 ';
    }
}

function updateAdvisorInfo(bmiScore){
    if(bmiScore > 0){
        document.getElementsByClassName("hidden-overlay")[0].hidden = true;
        document.getElementsByClassName("advisor-content-container")[0].hidden = false;
        if(bmiScore < 18.5){ //underweight
            bmiStatus.innerHTML = "Your BMI Status: Underweight";
            intro.innerHTML = "Your BMI value indicates that your weight is below average. We recommend the following plans to gain more weight and masses:";
            goal.src = "./images/underweight_goal.png";
            exercise.src = "./images/underweight_exercise.png";
            diet.src = "./images/underweight_diet.png";
            
        }else if(bmiScore >= 18.5 && bmiScore <= 24.9){ //normal
            bmiStatus.innerHTML = "Your BMI Status: Healthy";
            intro.innerHTML = "Your BMI value indicates that your weight is within average range. We recommend the following plans to maintain weight and healthy lifestyle:";
            goal.src = "./images/normal_goal.png";
            exercise.src = "./images/normal_exercise.png";
            diet.src = "./images/normal_diet.png";
    
        }else if(bmiScore >= 25.0 && bmiScore <= 29.9){ //overweight
            bmiStatus.innerHTML = "Your BMI Status: Overweight";
            intro.innerHTML = "Your BMI value indicates that your weight is above average. We recommend the following plans to to lose weight and restore body shape:";
            goal.src = "./images/overweight_goal.png";
            exercise.src = "./images/overweight_exercise.png";
            diet.src = "./images/overweight_diet.png";
    
        }else if(bmiScore >= 30.0){ //obesity
            bmiStatus.innerHTML = "Your BMI Status: Obese";
            intro.innerHTML = "Your BMI value indicates that your weight is well beyond the average. We recommend the following plans to lose high amount of weights, restore body shape, and practice healthier lifestyle:";
            goal.src = "./images/obesity_goal.png";
            exercise.src = "./images/obesity_exercise.png";
            diet.src = "./images/obesity_diet.png";
    
        }
    }
}

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCpOVon4b2SYUXpZ5cfonuKlfr5WZoTNQo",
    authDomain: "bmidatabase-ca960.firebaseapp.com",
    projectId: "bmidatabase-ca960"
});

async function updateUserData(weight, height, bmi) {
    var db = firebase.firestore();
    // var date = currentDate();
    var temp = String(countBmiData);
    
    db.collection("users").doc(email).collection("data").doc(temp).set({
        weight: weight,
        height: height,
        bmi: bmi
    })
    .then(() => {
        console.log("Data successfully added.");
    })
    .catch((error) => {
        console.log("Error: " + error);
    });

}


async function getData() {
    var db = firebase.firestore();

    db.collection("users").doc(email).collection("data").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            // console.log(doc.data().bmi);
            arrBmi.push(doc.data().bmi);
        });
        countBmiData = arrBmi.length;
        console.log("List of array: " + arrBmi);
        for (let i = 0; i < arrBmi.length; i++) {
            arrCount[i] = i;
        }
        loadChart();
    })
    .catch((error) => {
        console.log("Error: "  + error);
    });

}

// function currentDate() {
//     var today = new Date();
//     var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

//     return date;
// }

// buat load data dari email yg dipake login
var email;
window.onload = function() {
    email = localStorage.getItem("email");
    console.log(email);
    getData();
}