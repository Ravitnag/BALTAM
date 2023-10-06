const fs = require('fs');
const csv = require('csv-parser');

const convertCsvToJson = async (lines) => {
  let jsonArray = [];

  let headers = lines[0].split(',')

console.log(headers);

  for (let i = 1; i < lines.length; i++) {

    let data = lines[i].split(',')
    jsonArray[i] = {}

    for (let j = 0; j < headers.length; j++) {
      const header = headers[j];
      jsonArray[i][header] = data[j]
    }

  }

  jsonArray = jsonArray.filter(item => !item.zone_id)

  console.log(jsonArray);

  return jsonArray;


};

module.exports = convertCsvToJson