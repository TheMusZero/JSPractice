function greet() {
    // Вывод приветственного сообщения в диалоговом окне
    alert("Добро пожаловать!");

    // Вывод приветственного сообщения в окно браузера
    document.getElementById("welcomeMessage").innerText = "Добро пожаловать!";
}

// Вызов функции greet() при загрузке страницы
window.onload = greet;
