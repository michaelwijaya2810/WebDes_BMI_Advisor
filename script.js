function show() {
    var pwrd = document.getElementById('pass');
    var icon = document.getElementById('lock');

    if (pwrd.type === "password"){
        pwrd.type = "text";
        pwrd.style.marginTop = "20px";
        icon.style.color = "#548CFF"
    }
    else{
        pwrd.type = "password"
        icon.style.color = "#808080"
    }
}