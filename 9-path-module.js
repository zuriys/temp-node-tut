// path modules

//untuk mengetahui pemisah path
const path = require('path')
console.log(path.sep)

//untuk mengetahui  path dari suatu file
const FilePath = path.join('/content','subfolder','text.txt')
console.log(FilePath)

//untuk mengetahui nama file yang terdapat di path itu
const base = path.basename(FilePath)
console.log(base)

//absolute path nya 
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)