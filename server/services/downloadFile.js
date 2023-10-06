const axios = require('axios');
const fs = require('fs');
const unzipper = require('unzipper');
const util = require('util');
const https = require('https');

const downloadFile = async (url, filePath) => {
    try {
      const response = await axios.get(url, { responseType: 'stream', httpsAgent: new https.Agent({ rejectUnauthorized: false }), });
      const writer = fs.createWriteStream(filePath);
      
      response.data.pipe(writer);
  
      await util.promisify(writer.on).call(writer, 'finish');
      console.log('File downloaded successfully:', filePath);
    } catch (error) {
      console.error('Error downloading the file:', error);
    }
  };

  module.exports = downloadFile;

  
  