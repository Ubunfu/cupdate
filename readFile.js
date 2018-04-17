// Read lines from a file

var fs = require('fs');

module.exports = (file) => {

    return new Promise((resolve, reject) => {
    
        fs.readFile(file, 'utf8', (err, data) => {
        
            if (err) { 
                reject(new Error(`Unable to read file: ${file}`));
            } else {
                
                resolve(data);
            }
        });
    });
}