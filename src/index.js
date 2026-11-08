const appInsights = require('applicationinsights');

if (process.env.APPLICATIONINSIGHTS_CONNECTION_STRING) {
    appInsights.setup()
        .setAutoCollectRequests(true)
        .setAutoCollectExceptions(true)
        .setAutoCollectDependencies(true)
        .setSendLiveMetrics(true)
        .start();
}

const server = require('./server');

const port = process.env.PORT || 3000;
const hostname = '0.0.0.0';

server.create()
    .then(app => {
        app.listen(port, hostname, () => {
            console.log(`Server has started on port ${port}!`);
        });
    }).catch(err => console.log(err));
