<?php
function getStrArr($num){
	$sa = [];
	while($num--) {
		$sa[] = chr(rand(0, 57) + 65).chr(rand(0, 57) + 65).chr(rand(0, 57) + 65).chr(rand(0, 57) + 65).chr(rand(0, 57) + 65);
	}

	return $sa;
}

$sa = getStrArr(1000000);
$tsA = 'cNxyO';
$tsB = 'kpCig';
$tsC = 'nY_pV';
$tsD = 'nYDpV';
$tsE = 'aaaaa';
$count = 0;
$forCount = 0;

$sa[] = 'aaaaa';
//print_r($sa); echo "\n";

$start = microtime(true)*1000;

foreach ($sa as $s) {
	if($s == $tsA || $s == $tsB || $s == $tsC 
		|| $s == $tsD || $s == $tsE) $count++;
	$forCount++;
}

$end = microtime(true)*1000;

echo "${forCount} times compare with ${count} elements found\n";
echo 'consumed time:: '.intval($end - $start)."ms\n\n";
