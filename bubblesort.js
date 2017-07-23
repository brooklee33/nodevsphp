//this is about 10 times faster than php7 version
var starttime = new Date().getTime();

var array = [3,4,1,3,5,1,92,2,4124,424,52,12,23,345,656,767,132434,56,878,989,989,989,1234,45,6,3,4,677,12,8656,122,12];

var $ac = array.length;
var $acc = $ac - 1;

for (var c = 0; c < 100000; c++) {
    for (var i = 0; i < $ac; i++) {
        for (var y = 0; y < $acc; y++) {
            if (array[y+1] < array[y]) {
                var t = array[y];
                array[y] = array[y + 1];
                array[y + 1] = t;
            }
        }
    }
}

console.log(`${new Date().getTime() - starttime}ms`);
console.log(array);
