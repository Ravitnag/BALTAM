// const fs = require('fs');
// const util = require('util');
// const unzipper = require('unzipper');
//   const unzipFile = async (zipFilePath, unzipDirectory) => {
//     try {
//       await fs.promises.mkdir(unzipDirectory, { recursive: true });
//       await fs.createReadStream(zipFilePath)
//         .pipe(unzipper.Extract({ path: unzipDirectory }))
//         .on('close', () => {
//           console.log('ZIP file has been extracted to:', unzipDirectory);
//         });
//     } catch (error) {
//       console.error('Error unzipping the file:', error);
//     }
//   };


  const AdmZip = require("adm-zip");
const path = require("path");

async function extractArchive(filepath) {
  try {
    const zip = new AdmZip(filepath);
    const outputDir = `${path.parse(filepath).name}_extracted`;
    zip.extractAllTo(outputDir);

    console.log(`Extracted to "${outputDir}" successfully`);
  } catch (e) {
    console.log(`Something went wrong. ${e}`);
  }
}


  module.exports = extractArchive
  

  
  
  