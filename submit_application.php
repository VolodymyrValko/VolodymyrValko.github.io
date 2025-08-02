<?php

header('Content-Type: application/json');

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

if (!is_numeric($child_age) || $child_age < 1 || $child_age > 99) {
     echo json_encode(["success" => false, "message" => $child_age]);
    $conn->close();
    exit();
}

$sql = "INSERT INTO applications (child_name, child_age, parent_name, phone, email) VALUES (?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
if ($stmt === false) {
    echo json_encode(["success" => false, "message" => "Помилка підготовки запиту: " . $conn->error]);
    $conn->close();
    exit();
}

$stmt->bind_param("sisss", $child_name, $child_age, $parent_name, $phone, $email);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "Ваша заявка успішно надіслана!"]);
} else {
    echo json_encode(["success" => false, "message" => "Помилка при збереженні даних: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
