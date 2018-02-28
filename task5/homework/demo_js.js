var fs = require('fs')

var dirName = process.argv[2]
if(!fs.existsSync(dirName)){
  fs.mkdirSync(dirName)
  process.chdir(dirName)
  fs.mkdirSync('css')
  fs.mkdirSync('js')
  fs.writeFileSync("index.html","")
  fs.writeFileSync("js/main.js","")
  fs.writeFileSync("css/style.css","")
  fs.appendFileSync('index.html','<!DOCTYPE><title>Hello</title><h1>Hi</h1>')
  fs.appendFileSync('css/style.css','h1{color: red;}')
  fs.appendFileSync('js/main.js','var string = "Hello World"alert(string)')
  console.log('success')
}
else{
  console.log('error: dirName exists')
}
process.exit(0)