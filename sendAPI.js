const https = require('https');

module.exports = options => {
    return new Promise((resolve, reject) => {

        let responsePayload;

        const req = https.request(options, response =>{
            response.on('data', chunk => {
                responsePayload += chunk;
            });
            response.on('end', () => { 
                resolve(responsePayload);
            });
        });
        
        req.on('error', e => {
            reject(new Error(e));
        });

        req.end();
    })
}