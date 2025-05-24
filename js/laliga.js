// Sıralama
fetch('laliga-api.php?type=standings')
  .then(res => res.json())
  .then(data => {
    // sıralama işlemleri
  })
  .catch(err => {
    document.querySelector('main').innerHTML += `<p class="text-danger">Sıralama verileri yüklenemedi.</p>`;
  });

// Maçlar
fetch('laliga-api.php?type=matches')
  .then(res => res.json())
  .then(data => {
    // maç işlemleri
  })
  .catch(err => {
    document.querySelector('main').innerHTML += `<p class="text-danger">Maç verileri yüklenemedi.</p>`;
  });