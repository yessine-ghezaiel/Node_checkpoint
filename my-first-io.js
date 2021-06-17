const fs = require('fs')
var buf=fs.readFileSync(process.argv[2])
//  to read Al synchronous (or blocking) filesystem.
const str = buf.toString() 
//convert  Buffer objects to sting
var lines_number=str.split('\n').length-1 
//to count lines
console.log(lines_number)