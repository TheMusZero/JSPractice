function greet() {
    alert("Добро пожаловать!");
    document.getElementById("welcomeMessage").innerText = "Добро пожаловать!";
}
window.onload = greet;
