//node8.1 about 35% slower than php7.1 version

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
		o.age = Math.random()*100;
		ja.push(o);
	}

	return ja;
}

function jsonEncode(ja) {
	return JSON.stringify(ja);
}

function jsonDecode(js) {
	return JSON.parse(js);
}


let ja = getJsonArr(100000);
console.log(ja[0]);
let js = jsonEncode(ja);

let start = Date.now();

let jaa = jsonDecode(js);

let end = Date.now();

console.log(jaa[0]);
console.log(`${js.substr(0,8)}\n`);

console.log(`consumed time:: ${end - start}ms\n`);
