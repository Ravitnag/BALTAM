const cron = require('node-cron');
const config = require('../server.config');
const downloadFile = require('../services/downloadFile');
const extractArchive = require('../services/unzipFile');
const accessStopsFile = require('../services/accessStopsFile');
const convertCsvToJson = require('../services/convertCsvToJson')

const refreshRailStations = async (allRailStations) => {
    try {
        const url = config.GTFS_TRANSPORTATION;
        const zipFilePath = 'israel-public-transportation.zip';
        if (config.ENV !== 'dev') {
            await downloadFile(url, zipFilePath);
            await extractArchive(zipFilePath);
        }
        let lines = await accessStopsFile('./israel-public-transportation_extracted')
        let arrayOfStops = await convertCsvToJson(lines)
        console.log('done')
        allRailStations.data = arrayOfStops.map(stop=>({value: stop.stop_code, label: stop.stop_name})).
        sort((a,b)=> a.label.localeCompare(b.label))
    }
    catch (err) {
        console.log(err.stack);
    }

}


const scheduleRefresh = (allRailStations) => {
    cron.schedule(config.CRONJOB_4AM_EVERYDAY, async () => {
        await refreshRailStations(allRailStations);
    })
};



module.exports = { scheduleRefresh, refreshRailStations }