var fs = require('fs');

fs.writeFile("sample.txt",'My sample text Updated with Async Call',()=>{

    var readme = fs.readFileSync('sample.txt','utf8');
    
    console.log(readme);
})

