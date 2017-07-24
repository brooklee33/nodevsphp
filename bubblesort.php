<?php
//this is about 10 times slower than node version
$starttime = microtime(true)*1000;

$array = array(3,4,1,3,5,1,92,2,4124,424,52,12,23,345,656,767,132434,56,878,989,989,989,1234,45,6,3,4,677,12,8656,122,12);
$ac = count($array);
$acc = $ac - 1;
for ($c=0;$c<100000;$c++) {
	for ($i=0; $i<$ac; $i++) {
	    for ($y=0; $y<$acc; $y++) {
			if ($array[$y+1] < $array[$y]) {
				$t = $array[$y];
				$array[$y] = $array[$y+1];
				$array[$y+1] = $t;
			}
	    }
	}
}

//print_r($array);
echo "\n";

echo 'consumed time:: '.intval((microtime(true)*1000) - $starttime)."ms\n\n";
