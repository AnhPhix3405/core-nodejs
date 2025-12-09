// cách đọc file = file system
import fs from 'fs';
var testData;
fs.readFile('test.txt', 'utf8', (err, data) => {
    if(err){
        console.log(err);
        throw err;
    }
    testData = data;
});
setTimeout(() => {
    if(testData) console.log('Nội dung file test.txt:', testData);
    else{
        console.log("Wait for minutes")
    }
}, 1000);

// cách gửi request http
const configHttps = {
    hostname: 'example.com',
    path: '/',
    headers:{
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
    }
}


import https from 'https';
https.get(configHttps, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => console.log(data));
});

