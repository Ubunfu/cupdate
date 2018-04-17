const readFile = require('./readFile');
const sendAPI = require('./sendAPI');

const file = './hosts'

readFile(file).then(
        result => {
            const hosts = result.split('\n');
            console.log(hosts);
            
            sendReqs(hosts);
        },
        error => {
            console.error(error);
        }
);

function sendReqs(hosts) {
    hosts.forEach(host => {
        
        const options = {
            hostname: host,
            path: '/IKeepAlive/KeepAlive',
            method: 'GET'
        };

        sendAPI(options).then(
            result => {
                console.log(host);
                console.log(result);
            },
            error => {
                console.error(error);
            }
        )
        
    });
}


