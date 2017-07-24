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

$jaArr = getJsonArr(100000);
// print_r($jaArr); echo "\n";

$start = microtime(true)*1000;

$js = jsonEncode($jaArr);
// print_r($js); echo "\n\n";

$end = microtime(true)*1000;

echo "${fname} ". substr($js, 0, 8) ."\n\n";

echo 'consumed time:: '.intval($end - $start)."ms\n\n";
