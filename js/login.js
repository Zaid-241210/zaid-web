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
  const sakaryaEmailPattern = /^[a-z]+\d{9}@sakarya\.edu\.tr$/i;
  if (email.value && !sakaryaEmailPattern.test(email.value)) {
    emailError.textContent = "Lütfen geçerli bir SAÜ mail adresi girin (örnek: b2412100001@sakarya.edu.tr).";
    isValid = false;
  }

  // Geçersizse form gönderimini durdur
  if (!isValid) {
    e.preventDefault();
  }
});