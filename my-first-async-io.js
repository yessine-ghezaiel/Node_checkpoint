'use strict'
const fs = require('fs')

fs.readFile(process.argv[2], function (err, files) {
    if (err) {return console.log(err)}   
    const lines_number = files.toString().split('\n').length - 1
    console.log(lines_number)
})