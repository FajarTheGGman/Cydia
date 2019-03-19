<?php
function api($sec){
$url = "https://api.github.com/users/".$sec;
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13');
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec($ch);
$json = json_decode($result, true);
print_r($json);
return $result;
}
echo "\e[92mCopyright© By Fajar Firdaus\n\n";
echo "Masukan Username : ";
$sec = trim(fgets(STDIN));
api($sec);
?>
