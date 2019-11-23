var fs = require('fs');

console.log();

 fs.appendFileSync('number.txt',' 57');
 var read = fs.readFileSync('number.txt','utf-8');
console.log(read);

 //console.log(fs);