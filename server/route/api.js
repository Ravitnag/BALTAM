const express = require('express');
const router = express.Router();


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

module.exports = router;