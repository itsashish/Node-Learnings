var fs = require('fs');

fs.writeFile("Newsample.txt",'My Newsample text Updated with Async Call',()=>{

    var readme = fs.readFileSync('Newsample.txt','utf8');
    
    console.log(readme);
})

