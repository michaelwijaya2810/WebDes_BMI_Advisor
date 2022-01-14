document.getElementById("hei").value="50"
document.getElementById("wei").value="10"



//Calculate or recalculate
document.querySelector('.calculate .calc').onclick = function(){
    var weight = document.getElementById("wei").value
    var height = document.getElementById("hei").value

    let bmi = (weight/ Math.pow(height/100, 2));

    document.querySelector('.result .bmi .val').innerText = bmi;

    if (bmi < 18.5){
        document.querySelector('.result .text').innerText = 'UNDERWEIGHT!'
        document.querySelector('.result .bmi .val').style.color = '#3f51b5';
        document.querySelector('.result .text').style.color = "#3f51b5";
    } else if(bmi >= 18.5 && bmi < 25){
        document.querySelector('.result .text').innerText = 'NORMAL!'
        document.querySelector('.result .bmi .val').style.color = '#0f4';
        document.querySelector('.result .text').style.color = "#0f4";
    } else if(bmi >= 25 && bmi < 30){
        document.querySelector('.result .text').innerText = 'OVERWEIGHT!'
        document.querySelector('.result .bmi .val').style.color = '#FFC107';
        document.querySelector('.result .text').style.color = "#FFC107";
    } else if(bmi >= 31 && bmi < 35){
        document.querySelector('.result .text').innerText = 'OBESE!'
        document.querySelector('.result .bmi .val').style.color = '#FF0000';
        document.querySelector('.result .text').style.color = "#FF0000";
    } else if(bmi >= 35){
        document.querySelector('.result .text').innerText = 'EXTREMELY OBESE!'
        document.querySelector('.result .bmi .val').style.color = '#8B0000 ';
        document.querySelector('.result .text').style.color = "#8B0000 ";
    }
}