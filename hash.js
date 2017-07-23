// this is 2 times slow than php version ??????????
let start = Date.now();
// let mmm=new Map(); //this is more efficent, but still slower than php's array
let obj = [];

for (var i=0; i < 1000000; i++) {
	var time = Date.now();
	 obj[i + '_' + time] = time;
	// mmm.set(i + '_' + time, time);
}

console.log((Date.now() - start)/1000);
