# Benchmark Your Tiny Cases

## Install

```bash
npm i node-benchmark-runner -g
bm yourcase.js
```


## Usage

```javascript

const testArray = ["uarschzzt8", "ndycsv8ze", "jic06076f", "g9", "1v0", "zp1lpnjyq", "swjltmhb", "b8pp", "299", "ep"]



var output = ''
benchmark({
    'join': function(){
        output = testArray.join('')
    },
    'plus': function(){
        testArray.forEach(i=>output = output + i)
    }
}, 1e6)
```
save as test.js.

run `bm test.js` will output:

```
Runing...

join exec 1000000 times:  356ms
plus exec 1000000 times:  1403ms


  plus | ████████████████████████████████████████████████████████████ | 1403
  join | ███████████████                                              | 356
```

You alse can use like this.
```javascript
const benchmark = require('node-benchmark-runner')
```
than start with `node test.js`
