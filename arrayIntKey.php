<?php
$start = microtime(true)*1000;
$arr = array();

for ($i=0; $i < 1000000; $i++) {
	$arr[$i] = $i;
}

echo "\nconsumed time:: ".(intval(microtime(true)*1000 - $start))."ms\n\n";
