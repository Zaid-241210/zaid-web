const API_KEY = '5a27cfebefa747fc9a725a9ed25b0150';
const currentYear = new Date().getFullYear();
const main = document.querySelector("main");

// LALIGA STANDINGS (GÜNCEL SEZON)
fetch(`https://api.football-data.org/v4/competitions/PD/standings?season=${currentYear}`, {
  headers: { 'X-Auth-Token': API_KEY }
})
.then(res => res.json())
.then(data => {
  const standings = data.standings[0].table;
  let html = `
    <h2 class="text-white mb-4">LaLiga ${currentYear}/${currentYear + 1} Sıralama</h2>
    <table class="table table-dark table-striped">
      <thead>
        <tr><th>#</th><th>Takım</th><th>O</th><th>G</th><th>B</th><th>M</th><th>Av</th><th>P</th></tr>
      </thead><tbody>
  `;
  standings.forEach(team => {
    html += `
      <tr>
        <td>${team.position}</td>
        <td>${team.team.name}</td>
        <td>${team.playedGames}</td>
        <td>${team.won}</td>
        <td>${team.draw}</td>
        <td>${team.lost}</td>
        <td>${team.goalDifference}</td>
        <td>${team.points}</td>
      </tr>
    `;
  });
  html += '</tbody></table>';
  main.innerHTML += html;
})
.catch(err => {
  console.error("Sıralama API HATASI:", err);
  main.innerHTML += `<p class="text-danger">Sıralama verileri yüklenemedi.</p>`;
});


// LALIGA MATCHES (GÜNCEL + GEÇMİŞ KONTROLLÜ)
fetch(`https://api.football-data.org/v4/competitions/PD/matches?season=${currentYear}`, {
  headers: { 'X-Auth-Token': API_KEY }
})
.then(res => res.json())
.then(data => {
  const matches = data.matches;
  let upcomingMatches = "";
  let pastMatches = "";

  matches.forEach(match => {
    const date = new Date(match.utcDate).toLocaleDateString("tr-TR");
    const home = match.homeTeam.name;
    const away = match.awayTeam.name;
    const score = `${match.score.fullTime.home ?? "-"} : ${match.score.fullTime.away ?? "-"}`;

    const rowHTML = `
      <tr>
        <td>${date}</td>
        <td>${home}</td>
        <td>${score}</td>
        <td>${away}</td>
      </tr>
    `;

    if (match.status === "SCHEDULED") {
      upcomingMatches += rowHTML;
    } else {
      pastMatches += rowHTML;
    }
  });

  const tableHTML = `
    <h2 class="text-white mt-5 mb-4">Maçlar</h2>
    <table class="table table-dark table-hover">
      <thead>
        <tr><th>Tarih</th><th>Ev Sahibi</th><th>Skor</th><th>Deplasman</th></tr>
      </thead>
      <tbody>
        ${upcomingMatches}
      </tbody>
      <tbody id="pastMatches" style="display: none;">
        ${pastMatches}
      </tbody>
    </table>

    <div class="d-flex gap-2">
      <button id="showPast" class="btn btn-outline-light btn-sm">Geçmiş Maçları Göster</button>
      <button id="hidePast" class="btn btn-outline-danger btn-sm" style="display: none;">Geçmiş Maçları Gizle</button>
    </div>
  `;

  main.innerHTML += tableHTML;

  // Butonlar
  const showBtn = document.getElementById("showPast");
  const hideBtn = document.getElementById("hidePast");
  const pastTable = document.getElementById("pastMatches");

  showBtn.addEventListener("click", () => {
    pastTable.style.display = "table-row-group";
    showBtn.style.display = "none";
    hideBtn.style.display = "inline-block";
  });

  hideBtn.addEventListener("click", () => {
    pastTable.style.display = "none";
    showBtn.style.display = "inline-block";
    hideBtn.style.display = "none";
  });
})
.catch(err => {
  console.error("Maçlar API HATASI:", err);
  main.innerHTML += `<p class="text-danger">Maç verileri yüklenemedi.</p>`;
});