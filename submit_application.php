<?php
// submit_application.php

header('Content-Type: application/json'); // Встановлюємо заголовок, що відповідь буде у форматі JSON

// Налаштування для надсилання листа
$to_email = "radarix75@gmail.com"; // Ваша електронна пошта, куди надсилати листи
$subject = "Нова заявка з сайту IT Kinderschule";
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: webmaster@".$_SERVER['SERVER_NAME']. "\r\n";

// 1. Налаштування з'єднання з базою даних
$servername = "localhost";
$username = "root"; // Або ім'я користувача на хостингу
$password = "";     // Або пароль на хостингу
$dbname = "ITKinderschuleDB";

// Створення з'єднання
$conn = new mysqli($servername, $username, $password, $dbname);

// Перевірка з'єднання
if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Помилка підключення до бази даних: " . $conn->connect_error]);
    exit();
}

// 2. Валідація вхідних даних
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    echo json_encode(["success" => false, "message" => "Невірний метод запиту."]);
    $conn->close();
    exit();
}

$child_name = $_POST['childName'] ?? '';
$child_age = $_POST['childAge'] ?? '';
$parent_name = $_POST['parentName'] ?? '';
$phone = $_POST['phone'] ?? '';
$email = $_POST['email'] ?? '';

if (empty($child_name) || empty($child_age) || empty($parent_name) || empty($phone) || empty($email)) {
    echo json_encode(["success" => false, "message" => "Будь ласка, заповніть всі обов'язкові поля."]);
    $conn->close();
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "Будь ласка, введіть коректний E-mail."]);
    $conn->close();
    exit();
}

if (!is_numeric($child_age) || $child_age < 1 || $child_age > 99) {
     echo json_encode(["success" => false, "message" => "Вік дитини повинен бути числом від 1 до 99."]);
    $conn->close();
    exit();
}

// 3. Підготовка та виконання SQL-запиту для збереження заявки
$sql = "INSERT INTO applications (child_name, child_age, parent_name, phone, email) VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);

if ($stmt === false) {
    echo json_encode(["success" => false, "message" => "Помилка підготовки запиту: " . $conn->error]);
    $conn->close();
    exit();
}

$stmt->bind_param("sisss", $child_name, $child_age, $parent_name, $phone, $email);

if ($stmt->execute()) {
    $stmt->close();

    // 4. Логіка надсилання листа після успішного збереження
    // SQL-запит для отримання нової заявки
    $sql_select = "SELECT * FROM applications ORDER BY id DESC LIMIT 1";
    $result = $conn->query($sql_select);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        
        // Формування тіла листа в HTML-форматі
        $message = "<html><body>";
        $message .= "<h2>Нова заявка з сайту:</h2>";
        $message .= "<table border='1' cellpadding='5' cellspacing='0'>";
        $message .= "<tr style='background-color: #f2f2f2;'><th>Поле</th><th>Значення</th></tr>";
        $message .= "<tr><td>Ім'я дитини</td><td>" . htmlspecialchars($row['child_name']) . "</td></tr>";
        $message .= "<tr><td>Вік дитини</td><td>" . htmlspecialchars($row['child_age']) . "</td></tr>";
        $message .= "<tr><td>Ім'я батьків</td><td>" . htmlspecialchars($row['parent_name']) . "</td></tr>";
        $message .= "<tr><td>Телефон</td><td>" . htmlspecialchars($row['phone']) . "</td></tr>";
        $message .= "<tr><td>Email</td><td>" . htmlspecialchars($row['email']) . "</td></tr>";
        $message .= "<tr><td>Дата заявки</td><td>" . $row['submission_date'] . "</td></tr>";
        $message .= "</table>";
        $message .= "</body></html>";

        // Відправка листа
        if (mail($to_email, $subject, $message, $headers)) {
            echo json_encode(["success" => true, "message" => "Ваша заявка успішно надіслана! На пошту відправлено повідомлення."]);
        } else {
            echo json_encode(["success" => true, "message" => "Ваша заявка успішно надіслана, але виникла помилка при надсиланні листа."]);
        }

    } else {
         echo json_encode(["success" => true, "message" => "Ваша заявка успішно надіслана, але не вдалося отримати дані для листа."]);
    }

} else {
    echo json_encode(["success" => false, "message" => "Помилка при збереженні даних: " . $stmt->error]);
}

$conn->close();
?>