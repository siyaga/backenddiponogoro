const fs = require('fs');

let key= fs.readFileSync('C:/Users/ASUS/Documents/NodeJs/rapid/upload/certs/key.pem');

module.exports = {
    secret:key
}