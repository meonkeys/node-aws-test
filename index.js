var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');
new AWS.EC2().describeInstances(function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
