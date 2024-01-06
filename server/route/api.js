const express = require('express');
const router = express.Router();
const knex = require('knex')
const dbConfig = require('../db/knexfile')
const baltamKnex = knex(dbConfig)

router.get('/allRailStations', async(req, res) => {

    try {
        let allRailStations = req.allRailStations
        res.json(allRailStations)
    
    }
    catch(err){

        console.log(err.stack);
        res.json({status: false})
    }

})

router.get('/baltams', async(req,res) => {
    try {
      let baltams = await  baltamKnex('baltams').select('*')
      res.json({status: true})
      console.log(baltams);
    } catch (error) {
        console.log(error);
        res.json({status: false})
    }
})

module.exports = router;