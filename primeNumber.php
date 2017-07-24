<?php
function getPrimes($n)
{
    $sieve = [];
    for($i = 2; $i <= $n; $i++) {
        $sieve[$i] = $i;
    }

    $i =2;
    while($i * $i <= $n) {
        if(isset($sieve[$i])) {
            $k = $i;
            while ($k * $i <= $n) {
                unset($sieve[$k * $i]);
                $k++;
            }
        }
        $i++;
    }
    return $sieve;
}

$start = microtime(true)*1000;

$p = getPrimes(1000000);

$end = microtime(true)*1000;

echo 'has '.count($p)." prime numbers! \n\n";
//print_r($p);

echo 'consumed time:: '.intval($end - $start)."ms\n\n";
