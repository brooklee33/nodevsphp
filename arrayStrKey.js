// this is 2 times slow than php version ??????????
let start = Date.now();
let arr = [];

for (var i=0; i < 1000000; i++) {
	 arr[i+'s'] = i;
}

console.log(`\nconsumed time:: ${Date.now() - start}ms\n`);
