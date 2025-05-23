document.getElementById("loginForm").addEventListener("submit", function(e) {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  // Hataları sıfırla
  emailError.textContent = "";
  passwordError.textContent = "";

  let isValid = true;

  // Boşluk kontrolü
  if (email.value.trim() === "") {
    emailError.textContent = "Kullanıcı adı boş bırakılamaz.";
    isValid = false;
  }

  if (password.value.trim() === "") {
    passwordError.textContent = "Şifre boş bırakılamaz.";
    isValid = false;
  }

  // SAÜ mail kontrolü
  const sakaryaEmailPattern = /^[a-z]+\\d{9}@sakarya\\.edu\\.tr$/i;
  if (email.value && !sakaryaEmailPattern.test(email.value)) {
    emailError.textContent = "Lütfen geçerli bir SAÜ mail adresi girin (örnek: b2412100001@sakarya.edu.tr).";
    isValid = false;
  }

  // Şifre kontrolü: en az 8 karakter, en az 1 harf ve 1 rakam içermeli
  const sifre = password.value.trim();
  const gecerliSifre = sifre.length >= 8 && /[a-zA-Z]/.test(sifre) && /\\d/.test(sifre);
  if (sifre && !gecerliSifre) {
    passwordError.textContent = "Şifre en az 8 karakter olmalı ve hem harf hem rakam içermelidir.";
    isValid = false;
  }

  // Geçersizse form gönderimini durdur
  if (!isValid) {
    e.preventDefault();
  }
});