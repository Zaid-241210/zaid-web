<?php
// Form POST edilmediyse doğrudan yönlendir
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: login.html");
    exit;
}

// Değerleri al
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

// Doğru giriş bilgileri
$dogruEmail = "b241210561@sakarya.edu.tr";
$dogruSifre = "b241210001";

// Karşılaştır
if ($email === $dogruEmail && $password === $dogruSifre) {
    echo "<!DOCTYPE html>
    <html lang='tr'>
    <head>
        <meta charset='UTF-8'>
        <title>Hoş Geldiniz</title>
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' rel='stylesheet'>
    </head>
    <body class='bg-dark text-white d-flex justify-content-center align-items-center vh-100'>
        <h1>Hoşgeldiniz b241210561 👋</h1>
    </body>
    </html>";
} else {
    // Giriş başarısızsa JavaScript ile login.html'e yönlendir + uyarı
    echo "<script>
        alert('Kullanıcı adı veya şifre hatalı!');
        window.location.href = 'login.html';
    </script>";
    exit;
}
?>