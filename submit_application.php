<?php

header('Content-Type: application/json');

$to_email = "radarix75@gmail.com";
$subject = "Нова заявка з сайту IT Kinderschule";
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: webmaster@".$_SERVER['SERVER_NAME']. "\r\n";

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ITKinderschuleDB";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Помилка підключення до бази даних: " . $conn->connect_error]);
    exit();
}

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

    $sql_select = "SELECT * FROM applications ORDER BY id DESC LIMIT 1";
    $result = $conn->query($sql_select);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();

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
