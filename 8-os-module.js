 // OS Modules

 const os = require('os')

 //jika mau tau tentang info user saat ini 
 const user = os.userInfo()
 console.log(user)

 //atau disini jika kita ingin melihat system uptimenya dalam satuan detik 
 console.log(`the system uptime is ${os.uptime()} seconds`)

 //dan ini untuk info lainnya bisa aja langsung kita buatkan variabel yang langsung nampung banyak
 const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMemo : os.totalmem(),
    freeMemo : os.freemem(),
 }

 console.log(currentOS)