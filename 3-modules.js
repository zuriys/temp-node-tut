// CommonJS, every file is module (by default)         // every file in node is a module 
// Modules - Encapsulated code (only share minimum or only sharing what we want)

const names = require('./4-names')
const sayHi = require('./5-utils')
require('./7-whatever')

 
//console.log(names)


// kita bisa ganti const names itu jadi nilai john atau peter.
// tapi kita bisa juga  mengubah variabel parameternya yang dibawah dengan mengakses names lalu nilai didalamnya

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)