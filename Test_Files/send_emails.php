<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ITKinderschuleDB";

$to_email = "radarix75@gmail.com";
$subject = "Нові заявки з сайту IT Kinderschule";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Помилка підключення: " . $conn->connect_error);
}

$sql = "SELECT * FROM applications ORDER BY submission_date DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $message = "<html><body>";
    $message .= "<h2>Нові заявки з форми на сайті:</h2>";
    $message .= "<table border='1' cellpadding='5' cellspacing='0'>";
    $message .= "<tr style='background-color: #f2f2f2;'>";
    $message .= "<th>ID</th><th>Ім'я дитини</th><th>Вік дитини</th><th>Ім'я батьків</th><th>Телефон</th><th>Email</th><th>Дата заявки</th>";
    $message .= "</tr>";

    while($row = $result->fetch_assoc()) {
        $message .= "<tr>";
        $message .= "<td>" . $row['id'] . "</td>";
        $message .= "<td>" . htmlspecialchars($row['child_name']) . "</td>";
        $message .= "<td>" . htmlspecialchars($row['child_age']) . "</td>";
        $message .= "<td>" . htmlspecialchars($row['parent_name']) . "</td>";
        $message .= "<td>" . htmlspecialchars($row['phone']) . "</td>";
        $message .= "<td>" . htmlspecialchars($row['email']) . "</td>";
        $message .= "<td>" . $row['submission_date'] . "</td>";
        $message .= "</tr>";
    }

    $message .= "</table>";
    $message .= "</body></html>";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: itkinderschuledb@gmail.com" . "\r\n";

    if (mail($to_email, $subject, $message, $headers)) {
        echo "Лист успішно надіслано.";
    } else {
        echo "Помилка при надсиланні листа.";
    }
} else {
    echo "Немає нових заявок.";
}

$conn->close();
?>
