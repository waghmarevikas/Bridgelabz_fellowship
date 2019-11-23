var fs = require('fs');

console.log();

 fs.writeFileSync('readMe.txt',' vikas');
 fs.appendFileSync('readMe.txt',' sachin');
  fs.appendFileSync('readMe.txt',' mahendra');
  fs.appendFileSync('readMe.txt',' suraj');
  fs.appendFileSync('readMe.txt',' harshad');
  
var read = fs.readFileSync('readMe.txt','utf-8');
console.log(read);

//fs.rename('readMe.txt','writeMe.txt');