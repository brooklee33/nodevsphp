//about 4 times faster than php version
const getPrimes = (max) => {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
};

let start = Date.now();

let p = getPrimes(1000000);

let end = Date.now();

console.log(`has ${p.length} prime nubmbers\n`);
// console.log(p);

console.log(`consumed time:: ${end - start}ms\n`);
