<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$endpoint = $_GET['type'] ?? '';

$url = '';
switch ($endpoint) {
  case 'standings':
    $url = "https://api.football-data.org/v4/competitions/PD/standings";
    break;
  case 'matches':
    $url = "https://api.football-data.org/v4/competitions/PD/matches?season=" . date("Y");
    break;
  default:
    echo json_encode(["error" => "Geçersiz istek"]);
    exit;
}

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
  "X-Auth-Token: 5a27cfebefa747fc9a725a9ed25b0150"
]);
$response = curl_exec($ch);
curl_close($ch);

echo $response;
?>
