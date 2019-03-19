<?php
echo "Copyright© 2019 by Fajar Firdaus\n";
echo "";
system("toilet -f future Gempa --gay");
echo "";
$url = "http://data.bmkg.go.id/autogempa.xml";
$data = file_get_contents($url, false);
$xml = simplexml_load_string($data);
echo "Tanggal : ".$xml->gempa->Tanggal."\n";
echo "Jam : ".$xml->gempa->Jam."\n";
echo "Koordinat : ".$xml->gempa->point->coordinates."\n";
echo "Lintang : ".$xml->gempa->Lintang."\n";
echo "Bujur : ".$xml->gempa->Bujur."\n";
echo "Magnitudo : ".$xml->gempa->Magnitude."\n";
echo "Kedalaman : ".$xml->gempa->Kedalaman."\n";
echo "Wilayah1 : ".$xml->gempa->Wilayah1."\n";
echo "Wilayah2 : ".$xml->gempa->Wilayah2."\n";
echo "Wilayah3 : ".$xml->gempa->Wilayah3."\n";
echo "Wilayah4 : ".$xml->gempa->Wilayah4."\n";
echo "Wilayah5 : ".$xml->gempa->Wilayah5."\n";
echo "Potensi : ".$xml->gempa->Potensi."\n";
?>