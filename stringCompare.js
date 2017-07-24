//node8.1 about 3 times slower than php7.1 version

function getStrArr(num){
	let sa = [];
	while(num--) {
		let n1 = Math.floor(65 + (Math.random()*(122-65)));
		let n2 = Math.floor(65 + (Math.random()*(122-65)));
		let n3 = Math.floor(65 + (Math.random()*(122-65)));
		let n4 = Math.floor(65 + (Math.random()*(122-65)));
		let n5 = Math.floor(65 + (Math.random()*(122-65)));

		let s = String.fromCharCode(n1) + String.fromCharCode(n2)+
				 String.fromCharCode(n3) + String.fromCharCode(n4)+
				 String.fromCharCode(n5);
		sa.push(s);
	}

	return sa;
}

let sa = getStrArr(1000000),
	tsA = 'cNxyO',
	tsB = 'kpCig',
	tsC = 'nY_pV',
	tsD = 'nYDpV',
	tsE = 'aaaaa',
	count = 0,
	forCount = 0;

sa.push('aaaaa');

//console.log(sa);

let start = Date.now();

for (let s of sa) {
	if(s == tsA || s == tsB || s == tsC || s == tsD || s == tsE) count++;
	forCount++;
}

let end = Date.now();

console.log(`${forCount} times compare with ${count} elements found\n`);

console.log(`consumed time:: ${end - start}ms\n`);
