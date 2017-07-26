//node8.1 is about 40% slower than php7.1 version

function getJsonArr(num){
	let ja = [];
	while(num--) {
		let o = {};
		let n1 = Math.floor(65 + (Math.random()*(122-65)));
		let n2 = Math.floor(65 + (Math.random()*(122-65)));
		let n3 = Math.floor(65 + (Math.random()*(122-65)));
		let n4 = Math.floor(65 + (Math.random()*(122-65)));
		let n5 = Math.floor(65 + (Math.random()*(122-65)));

		o.name = String.fromCharCode(n1) + String.fromCharCode(n2)+
				 String.fromCharCode(n3) + String.fromCharCode(n4)+
				 String.fromCharCode(n5);
		// o.age = Math.random()*100;
		// parseInt will affect the performance significantly
		o.age = parseInt(Math.random()*100);
		ja.push(o);
	}

	return ja;
}

function jsonEncode(ja) {
	return JSON.stringify(ja);
}


let ja = getJsonArr(1000000);
// console.log(ja);

let start = Date.now();

let js = jsonEncode(ja);
// console.log(js);

let end = Date.now();

console.log(`${js.substr(0,8)}\n`);

console.log(`consumed time:: ${end - start}ms\n`);
