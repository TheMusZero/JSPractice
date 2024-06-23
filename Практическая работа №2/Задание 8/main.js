window.onload = function() {
    let userName = prompt("Введите сюда своё имя", "Введите имя");
    document.getElementById("nameDisplay").innerText = "Ваше имя: " + userName;
    if (confirm("Начать заново?")) {
        if (confirm("Не надоело?")) {
            alert("Ну и правильно!");
        } else {
            alert("Ну и правильно!");
        }
    } else {
        alert("Ну и правильно!");
    }
};