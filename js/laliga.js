const API_KEY = '5a27cfebefa747fc9a725a9ed25b0150';

fetch('https://api.football-data.org/v4/competitions/PD/standings', {
  headers: {
    'X-Auth-Token': API_KEY
  }
})
.then(res => res.json())
.then(data => {
  const standings = data.standings[0].table;
  let html = `
    <h2 class="text-white mb-4">LaLiga 2024/25 Sıralama</h2>
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Takım</th>
          <th>O</th>
          <th>G</th>
          <th>B</th>
          <th>M</th>
          <th>Av</th>
          <th>P</th>
        </tr>
      </thead>
      <tbody>
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

  html += `</tbody></table>`;
  document.querySelector('main').innerHTML += html;
})
.catch(err => {
  console.error("API HATASI:", err);
  document.querySelector('main').innerHTML += `<p class="text-danger">Sıralama verileri yüklenemedi.</p>`;
});