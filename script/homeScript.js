var bmiStatus = document.getElementsByClassName("bmi-status")[0];
var intro = document.getElementsByClassName("bmi-plan-intro")[0];
var goal = document.getElementsByClassName("plan-goal-img")[0];
var exercise = document.getElementsByClassName("plan-exercise-img")[0];
var diet = document.getElementsByClassName("plan-diet-img")[0];

let myChart = document.getElementById('historyChart').getContext('2d');

let testChart = new Chart(myChart, {
    type: 'line',
    data:{
        labels:['January', 'Febbuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], 
        datasets:[{
            label: 'BMI CHART',
            data: [
                18.5, 18.9, 19.2, 18.5, 20.5, 18.8, 21.2, 19.5, 19.7, 19.3, 20.9, 22.1
            ],
            borderColor: [
                "rgb(30, 144, 255)"
            ],
            borderWidth: 1
        }]
    },
    options:{
        
    }
});

function load(){
    document.getElementById('wei').value = "50"
    document.getElementById('hei').value = "150"
}

function calculate(){
    var weight = document.getElementById("wei").value
    var height = document.getElementById("hei").value

    let bmi = (weight/ Math.pow(height/100, 2));
    
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
    } else if(bmi >= 25 && bmi < 30){
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
    if(bmiScore>0){
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