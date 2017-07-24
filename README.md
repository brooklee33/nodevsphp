## Node vs PHP misc performace test
### Test result(Node 8.2; PHP 7.1.7)

``` bash
---------------------------
$time node bubblesort.js

consumed time:: 272ms

real    0m0.569s
user    0m0.541s
sys     0m0.022s

---------

$time php bubblesort.php


consumed time:: 2731ms


real    0m2.744s
user    0m2.724s
sys     0m0.005s

----------------------------
$ time node decode-json.js

consumed time:: 109ms


real    0m0.549s
user    0m0.405s
sys     0m0.140s

---------

$ time php decode-json.php

consumed time:: 75ms


real    0m0.230s
user    0m0.183s
sys     0m0.040s

----------------------------
$ time node encode-json.js

consumed time:: 55ms


real    0m0.430s
user    0m0.338s
sys     0m0.088s

---------
$ time php encode-json.php

consumed time:: 18ms


real    0m0.151s
user    0m0.111s
sys     0m0.035s

----------------------------
$ time node hash.js

consumed time:: 2459ms


real    0m2.784s
user    0m2.394s
sys     0m0.373s

---------
$ time php hash.php
consumed time:: 632ms


real    0m0.654s
user    0m0.628s
sys     0m0.020s

----------------------------
$ time node primeNumber.js

consumed time:: 48ms


real    0m0.388s
user    0m0.344s
sys     0m0.039s

---------
$ time php primeNumber.php

consumed time:: 175ms


real    0m0.190s
user    0m0.167s
sys     0m0.020s

----------------------------
$ time node randomString.js

consumed time:: 71ms


real    0m0.380s
user    0m0.327s
sys     0m0.049s

---------
$ time php randomString.php

consumed time:: 4475ms


real    0m4.488s
user    0m4.457s
sys     0m0.007s

----------------------------
$ time node stringCompare.js

consumed time:: 40ms


real    0m0.743s
user    0m0.620s
sys     0m0.116s

---------
$ time php stringCompare.php

consumed time:: 124ms


real    0m0.754s
user    0m0.726s
sys     0m0.019s

```
