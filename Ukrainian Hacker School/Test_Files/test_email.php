<?php

$to_email = "radarix75@gmail.com";
$subject = "Нові заявки з сайту IT Kinderschule";

    $message = "<html><body>";
    $message .= "<h2>Нові заявки з форми на сайті:</h2>";
    $message .= "<table border='1' cellpadding='5' cellspacing='0'>";
    $message .= "<tr style='background-color: #f2f2f2;'>";
    $message .= "<th>ID</th><th>Ім'я дитини</th><th>Вік дитини</th><th>Ім'я батьків</th><th>Телефон</th><th>Email</th><th>Дата заявки</th>";
    $message .= "</tr>";

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

	$conn->close();
?>
