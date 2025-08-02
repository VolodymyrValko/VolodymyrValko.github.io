<?php
// submit_application.php

header('Content-Type: application/json'); // Встановлюємо заголовок, що відповідь буде у форматі JSON

// 1. Налаштування з'єднання з базою даних
$servername = "localhost"; // або IP-адреса сервера бази даних
$username = "root"; // Заміни на ім'я користувача бази даних
$password = ""; // Заміни на пароль бази даних
$dbname = "ITKinderschuleDB";

// Створення з'єднання
$conn = new mysqli($servername, $username, $password, $dbname);

// Перевірка з'єднання
if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Помилка підключення до бази даних: " . $conn->connect_error]);
    exit();
}

// 2. Валідація вхідних даних
// Перевірка, чи метод запиту - POST
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    echo json_encode(["success" => false, "message" => "Невірний метод запиту."]);
    $conn->close();
    exit();
}

// Збираємо та очищаємо дані
$child_name = $_POST['childName'] ?? '';
$child_age = $_POST['childAge'] ?? '';
$parent_name = $_POST['parentName'] ?? '';
$phone = $_POST['phone'] ?? '';
$email = $_POST['email'] ?? '';

// Додаткова валідація на порожні поля
if (empty($child_name) || empty($child_age) || empty($parent_name) || empty($phone) || empty($email)) {
    echo json_encode(["success" => false, "message" => "Будь ласка, заповніть всі обов'язкові поля."]);
    $conn->close();
    exit();
}

// Валідація електронної пошти
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "Будь ласка, введіть коректний E-mail."]);
    $conn->close();
    exit();
}

// Валідація віку (наприклад, від 1 до 99)
if (!is_numeric($child_age) || $child_age < 1 || $child_age > 99) {
     echo json_encode(["success" => false, "message" => "Вік дитини повинен бути числом від 1 до 99."]);
    $conn->close();
    exit();
}

// 3. Підготовка та виконання SQL-запиту
// Використання підготовлених виразів для запобігання SQL-ін'єкціям
$sql = "INSERT INTO applications (child_name, child_age, parent_name, phone, email) VALUES (?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
if ($stmt === false) {
    echo json_encode(["success" => false, "message" => "Помилка підготовки запиту: " . $conn->error]);
    $conn->close();
    exit();
}

// Прив'язка параметрів до підготовленого виразу
$stmt->bind_param("sisss", $child_name, $child_age, $parent_name, $phone, $email);
// "s" - string, "i" - integer

// Виконання запиту
if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "Ваша заявка успішно надіслана!"]);
} else {
    echo json_encode(["success" => false, "message" => "Помилка при збереженні даних: " . $stmt->error]);
}

// 4. Закриття з'єднання
$stmt->close();
$conn->close();
?>
