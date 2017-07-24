<?php
//this is about 40 times slower than node version
function main () {
	$starttime = microtime(true)*1000;

	$s=""; //generate a random string of 108KB and a random filename
	$fname = './tmp/'.chr(rand(0,57)+65).chr(rand(0,57)+65).chr(rand(0,57)+65).chr(rand(0,57)+65).'.txt';

	for($i=0;$i<300000;$i++)
	{
		$n=rand(0,57)+65;
		$s = $s.chr($n);
	}
	 
	//write s to a file
	//file_put_contents($fname,$s);
	//$result = file_get_contents($fname);

	//echo $result;
	//echo "\n\n The result is =========>";
	
	$ss="";
	for($i=0;$i<300000;$i++)
	{
		$ss = $ss.substr($s, $i, 1);
	}

	echo "the string lenght is:: ". strlen($ss) ."\n\n";
	echo "${fname} ". substr($ss, 0, 1) ."\n\n";

	$endtime = microtime(true)*1000;

	echo "consumed time:: ".intval(($endtime - $starttime))."ms\n\n";


}

main();
