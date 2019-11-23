console.log("                                  Program of OrderList using File ");



console.log();
var utility  = require('../Utility');
// var read = require('readline-sync');
var fs = require("fs");
var list = new utility.LinkedList();
var input = utility.readFile('number.txt');

function readFromfile()
{
    for(let i = 0; i<input.length; i++)
    {
     
        list.addNode(input[i]);
    }
}
readFromfile();

console.log("List is : "+list.displayList());
console.log();

list.fileSort(input);