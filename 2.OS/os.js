const os = require("os");
console.log(os.arch());

//-> freeMemory
const freeMemory = os.freemem();
console.log(`${freeMemory / 1024 / 1024 / 1024} GB`);

//-> totalMemory
const totalMemory = os.totalmem();
console.log(`${totalMemory / 1024 / 1024 / 1024} GB`);
//-> host name
console.log(os.hostname());

//-> platform 32 or 64
console.log(os.platform());

//-> path of temp dir
console.log("temp dir", os.tmpdir());

//-> type of OS
console.log("OS type", os.type());
