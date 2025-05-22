const API_KEY = '5a27cfebefa747fc9a725a9ed25b0150'; // Senin token
const currentYear = new Date().getFullYear();
const seasonText = `${currentYear}/${(currentYear + 1).toString().slice(2)}`;

// 1. LaLiga Sıralama
fetch(`https://api.football-data.org/v4/competitions/PD/standings?season=${currentYear}`, {
  headers: { 'X-Auth-Token': API_KEY }
})
.then(res => res.json())
.then(data => {
  const standings = data.standings[0].table;
  let html = `
    <h2 class="text-white mb-4">LaLiga ${seasonText} Sıralama</h2>
    <table class="table table-dark table-striped">
      <thead>
        <tr><th>#</th><th>Takım</th><th>O</th><th>G</th><th>B</th><th>M</th><th>Av</th><th>P</th></tr>
      </thead><tbody>
  `;
  standings.forEach(team => {
    html += `<tr>
      <td>${team.position}</td>
      <td>${team.team.name}</td>
      <td>${team.playedGames}</td>
      <td>${team.won}</td>
      <td>${team.draw}</td>
      <td>${team.lost}</td>
      <td>${team.goalDifference}</td>
      <td>${team.points}</td>
    </tr>`;
  });
  html += '</tbody></table>';
  document.querySelector('main').innerHTML += html;
})
.catch(err => {
  console.error("SIRALAMA API HATASI:", err);
  document.querySelector('main').innerHTML += `<p class="text-danger">Sıralama verileri yüklenemedi.</p>`;
});

// 2. LaLiga Maçları
fetch(`https://api.football-data.org/v4/competitions/PD/matches?season=${currentYear}`, {
  headers: { 'X-Auth-Token': API_KEY }
})
.then(res => res.json())
.then(data => {
  const matches = data.matches;
  let html = `
    <h2 class="text-white mt-5 mb-4">LaLiga ${seasonText} Maçları</h2>
    <table class="table table-dark table-hover">
      <thead>
        <tr>
          <th>Tarih</th><th>Ev Sahibi</th><th>Skor</th><th>Deplasman</th>
        </tr>
      </thead><tbody>
  `;
  matches.forEach(match => {
    const tarih = new Date(match.utcDate).toLocaleDateString("tr-TR");
    html += `<tr>
      <td>${tarih}</td>
      <td>${match.homeTeam.name}</td>
      <td>${match.score.fullTime.home ?? '-'} : ${match.score.fullTime.away ?? '-'}</td>
      <td>${match.awayTeam.name}</td>
    </tr>`;
  });
  html += '</tbody></table>';
  document.querySelector('main').innerHTML += html;
})
.catch(err => {
  console.error("MAÇLAR API HATASI:", err);
  document.querySelector('main').innerHTML += `<p class="text-danger">Maç verileri yüklenemedi.</p>`;
});