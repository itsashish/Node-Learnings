var fs = require('fs');

//fs.mkdirSync("New Folder")
//fs.rmdirSync("New Folder")
fs.unlinkSync('./New Folder/NewSampleFile.txt')
fs.mkdir('New Folder',()=>{
    fs.readFile('NewSample.txt','utf8',(eroor,data)=>{
        fs.writeFileSync('./New Folder/NewSampleFile.txt',data)
    })
})

