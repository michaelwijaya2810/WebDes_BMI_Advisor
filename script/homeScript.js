function load(){
    document.getElementById('wei').value = "10"
    document.getElementById('hei').value = "50"
}

function calculate(){
    var weight = document.getElementById("wei").value
    var height = document.getElementById("hei").value

    let bmi = (weight/ Math.pow(height/100, 2));

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
        document.querySelector('.result .bmi .val').style.color = '#FFC107';
        ocument.querySelector('.obj .result').style.color = "#FFC107";
    } else if(bmi >= 31 && bmi < 35){
        document.querySelector('.obj .result').innerText = 'OBESE!'
        document.querySelector('.result .bmi .val').style.color = '#FF0000';
        ocument.querySelector('.obj .result').style.color = "#FF0000";
    } else if(bmi >= 35){
        document.querySelector('.obj .result').innerText = 'EXTREMELY OBESE!'
        document.querySelector('.result .bmi .val').style.color = '#8B0000 ';
        ocument.querySelector('.obj .result').style.color = "#8B0000 ";
    }
    alert(bmi)
}