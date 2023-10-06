const express = require('express');
const { scheduleRefresh, refreshRailStations } = require('./crons/refreshRailStations')
const app = express();
const cors = require('cors');

let allRailStations = {}
// Use cors middleware to allow requests from specific origins
const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your frontend's origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  };
  
  app.use(cors(corsOptions));
  
scheduleRefresh(allRailStations)

refreshRailStations(allRailStations).then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}...`));
})

app.use((req, res, next) => {
    req.allRailStations = allRailStations;
    next();
})


app.use('/api', require('./route/api'));
const port = 8000


app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));