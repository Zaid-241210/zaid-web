<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <title>Form Cevabı</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-dark text-light p-5">

  <div class="container">
    <h2 class="mb-4">Form Başarıyla Gönderildi ✅</h2>

    <ul class="list-group text-dark">
      <li class="list-group-item">Adınız Soyadınız: <strong><?= htmlspecialchars($_POST['adsoyad']) ?></strong></li>
      <li class="list-group-item">E-posta Adresiniz: <strong><?= htmlspecialchars($_POST['email']) ?></strong></li>
      <li class="list-group-item">Şifreniz: <strong><?= htmlspecialchars($_POST['sifre']) ?></strong></li>
      <li class="list-group-item">Telefon Numaranız: <strong>05<?= htmlspecialchars($_POST['telefon']) ?></strong></li>
      <li class="list-group-item">Tarih: <strong><?= htmlspecialchars($_POST['tarih']) ?></strong></li>
      <li class="list-group-item">Saat: <strong><?= htmlspecialchars($_POST['saat']) ?></strong></li>
      <li class="list-group-item">Dosya Adı: <strong><?= htmlspecialchars($_POST['dosya']) ?></strong></li>
      <li class="list-group-item">Cinsiyet: <strong><?= htmlspecialchars($_POST['cinsiyet']) ?></strong></li>
      <li class="list-group-item">Şehir: <strong><?= htmlspecialchars($_POST['sehir']) ?></strong></li>
      <li class="list-group-item">Mesajınız: <strong><?= nl2br(htmlspecialchars($_POST['mesaj'])) ?></strong></li>
      <li class="list-group-item">Onay Durumu: <strong><?= isset($_POST['onay']) ? 'Kabul Edildi' : 'Kabul Edilmedi' ?></strong></li>
    </ul>

    <a href="iletisim.html" class="btn btn-primary mt-4">Forma Geri Dön</a>
  </div>

</body>
</html>
