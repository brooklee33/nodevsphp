// this is 2 times slow than php version ??????????
let start = Date.now();
let map = new Map();

for (var i=0; i < 1000000; i++) {
	 map.set(i+'ss', i);
}

console.log(`\nconsumed time:: ${Date.now() - start}ms\n`);
