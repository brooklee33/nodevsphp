<?php
function getJsonArr($num){
	$ja = [];
	while($num--) {
		$o['name'] = chr(rand(0, 57) + 65).chr(rand(0, 57) + 65).chr(rand(0, 57) + 65).chr(rand(0, 57) + 65).chr(rand(0, 57) + 65);
		$o['age'] = rand(1,100);
		$ja[]=$o;
	}

	return $ja;
}

function jsonEncode($ja) {
	return json_encode($ja);
}

function jsonDecode($js) {
	return json_decode($js);
}

$jaa = getJsonArr(100000);
print_r($jaa[0]); echo "\n";
$jss = jsonEncode($jaa);

$start = microtime(true)*1000;

$jaaa = jsonDecode($jss);

$end = microtime(true)*1000;

print_r($jaaa[0]); echo "\n\n";
echo "${fname} ". substr($js, 0, 8) ."\n\n";

echo 'consumed time:: '.intval($end - $start)."ms\n\n";
