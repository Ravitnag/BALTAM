module.exports = {
    CRONJOB_4AM_EVERYDAY: '0 4 * * *',
    GTFS_TRANSPORTATION: 'https://gtfs.mot.gov.il/gtfsfiles/israel-public-transportation.zip',
    ENV: process.env.ENV || 'dev',

    //DB
    DB_HOST: process.env.DB_HOST || 'pg-baltam-baltam.a.aivencloud.com',
    USER_DB: process.env.USER_DB || 'avnadmin',
    PASSWORD_DB: process.env.PASSWORD_DB || 'AVNS__uvvw9s6SSIEVc4z17d',
    DB_PORT: process.env.DB_PORT || '28096',
    DB_NAME: process.env.DB_NAME || 'defaultdb'
}