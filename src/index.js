const express = require('express');
const apiRoutes = require('./routes');
const { serverConfig } = require('./config');

const app = express();

app.use('/api', apiRoutes);

app.listen(serverConfig.PORT, () => {
    console.log(`Successfully started on the server on PORT : ${serverConfig.PORT}`);
   
})