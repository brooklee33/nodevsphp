// this is 2 times faster than php version ??????????
let start = Date.now();
let arr = [];

for (var i=0; i < 1000000; i++) {
	 arr[i] = i; //numer key is fast
}

console.log(`\nconsumed time:: ${Date.now() - start}ms\n`);
