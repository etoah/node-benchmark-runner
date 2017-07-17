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