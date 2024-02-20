const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
//Валидация входа
function validateAndRedirect() {
    // Получаем значения полей Email и Password
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    document.getElementById("email-error").style.display = "none";
    document.getElementById("password-error").style.display = "none";


    if (!isValidEmail(email)) {
        document.getElementById("email-error").style.display = "block";
        document.getElementById("email-error").innerText = "Please enter a valid email.";
        isValid = false;
    }
    if (!isValidPassword(password)) {
        document.getElementById("password-error").style.display = "block";
        document.getElementById("password-error").innerText = "Please enter a password with at least 8 characters.";
        isValid = false;
    }
    else {
        window.location.href = "main_page.html";
    }
}

// Функция для проверки валидности email
function isValidEmail(email) {
    // Простая проверка наличия символа @
    return email.includes("@");
}

// Функция для проверки валидности пароля
function isValidPassword(password) {
    // Проверяем, что пароль содержит не менее 8 символов
    return password.length >= 8;
}

function openModal() {
    document.getElementById("modal").style.display = "block";
}

// Закрыть модальное окно
function closeModal() {
    document.getElementById("modal").style.display = "none";
    var emailValue = document.getElementById("email").value;
    document.getElementById("to").value = emailValue;
}