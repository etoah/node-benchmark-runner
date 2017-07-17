const histogram = require('ascii-histogram')


const benchmark = function(competitors, count = 1e4){
    let exeTimeResult = Object.create(null)
    let maxLength = 0

    Object.keys(competitors).forEach(i=>{if(i.length>maxLength)maxLength=i.length})
    console.log('Runing...\n\r')
    Object.keys(competitors).forEach(name=>{
        var st = Date.now()
        for(let i = 0; i < count; i++){
         competitors[name]()
        }
        exeTimeResult[name] = Date.now() - st
        console.log(`${' '.repeat(maxLength-name.length)}${name} exec ${count} times:  ${exeTimeResult[name]}ms`)    
    })

    console.log('\n\r')
    console.log(histogram(exeTimeResult, { bar: '█', sort: true }));
}



module.exports = benchmark
