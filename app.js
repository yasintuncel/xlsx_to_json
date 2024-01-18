const util = require('util');
var XLSX = require("xlsx");
const workbook = XLSX.readFile('Nationalities.xlsx');
const sheet_name_list = workbook.SheetNames;
let excelJson = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
let myJson = []

excelJson.map(e => {
    myJson.push({
        name: e['Nationality'],
        country: e['Country'],
        code: e['Country Code'],
        order: 1,
    })
})

require('child_process').spawn('clip').stdin.end(util.inspect(JSON.stringify(myJson)));
console.log(JSON.stringify(myJson))
