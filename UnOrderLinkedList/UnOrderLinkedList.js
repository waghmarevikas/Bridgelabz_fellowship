var utility = require('../Utility')
console.log("hi");
var read = require('readline-sync');
var list = new utility.LinkedList();
var inputFile = utility.readFile('readMe.txt');
var fs = require("fs");

function readFromFile()
{ 
    for(var i=0; i<inputFile.length; i++)
    {
        list.addNode(inputFile[i]);
    }
}

readFromFile();
console.log(list.displayList());
console.log();

var search = read.question("Enter String to search : ");
console.log("Element is : "+list.search(search));
console.log();


if(list.search(search))
{
    list.deleteNode(search);
    
}
else
{
    list.addNode(search);
}

var content = list.displayList();
utility.writeFile('readMe',content);