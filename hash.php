<?php
$start = microtime(true);
$arr = array();

for ($i=0; $i < 100; $i++) {
	$time = microtime(true);
	$arr[$i.'_'.$time] = $time;
}

echo (microtime(true) - $start)."\n\n";
