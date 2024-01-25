const ADMIN_PASSWORD = 'jqueryismyjam';
let usersData = prompt("Enter your login, please:");
let message = "";

if (usersData === null) {
    message = 'Операцію скасовано!';
} else if (usersData === ADMIN_PASSWORD) {
    message = 'Ласкаво просимо!';
} else {
    message = 'Доступ заборонено, невірний пароль!';
}

alert(message);
