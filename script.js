var bmiStatus = document.getElementsByClassName("bmi-status")[0];
var intro = document.getElementsByClassName("bmi-plan-intro")[0];
var goal = document.getElementsByClassName("plan-goal-img")[0];
var exercise = document.getElementsByClassName("plan-exercise-img")[0];
var diet = document.getElementsByClassName("plan-diet-img")[0];

var bmiScore = 20;

function updateAdvisorInfo(bmiScore){
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

updateAdvisorInfo(bmiScore);