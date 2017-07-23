//this is about 40 times faster than php7 version
var util = require('util');
var fs = require('fs');
const writeF = util.promisify(fs.writeFile);
const readF = util.promisify(fs.readFile);

async function main() {
	var starttime = new Date().getTime();
	//console.log('request received!');
	var s=""; //generate a random string of 108KB and a random filename
	var fname = './tmp/'+String.fromCharCode(Math.floor(65 + (Math.random()*(122-65)) )) +
			String.fromCharCode(Math.floor(65 + (Math.random()*(122-65)) )) +
			String.fromCharCode(Math.floor(65 + (Math.random()*(122-65)) )) + 
			String.fromCharCode(Math.floor(65 + (Math.random()*(122-65)) )) + ".txt";

	for(i=0;i<300000;i++)
	{
		n=Math.floor(65 + (Math.random()*(122-65)) );
		s+=String.fromCharCode(n);
	}

	//let fd = await writeF(fname, s);
	//let result = await readF(fname);
	//console.log(result+'\n\n');
	
	var ss='';
	for(i=0;i<300000;i++)
	{
		ss+=s.substr(i, 1);
	}

	console.log(`${fname} ${s.substr(0,1)}\n`);
	console.log(`the string length:: ${ss.length}\n`);

	console.log(`${new Date().getTime() - starttime}ms`);
}

main();
