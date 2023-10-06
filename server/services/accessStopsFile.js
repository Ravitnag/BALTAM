const fs = require('fs');
const util = require('util');
const readline = require('readline');

const accessStopsFile = async (unzipDirectory) => {
  const stopsFilePath = `${unzipDirectory}/stops.txt`;
  let lines = [];
  try {
    await util.promisify(fs.access)(stopsFilePath, fs.constants.F_OK);
    const rl = readline.createInterface({
      input: fs.createReadStream(stopsFilePath),
      crlfDelay: Infinity,
    });

    for await (const line of rl) {
      lines.push(line);
    }

    return lines;
  }
 catch (error) {
  console.error('Error reading stops.txt:', error);
}
  };


module.exports = accessStopsFile





