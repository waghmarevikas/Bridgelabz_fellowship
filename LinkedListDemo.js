console.log();
console.log("                          This program is LinkedList")
console.log();

var read = require('readline-sync');
var utility = require('./Utility');
var list = new  utility.LinkedList();
console.log(list);
console.log();

console.log("List empty : "+list.isEmpty());
console.log();

list.addNode(5)
list.addNode(15);
list.addNode(25);
list.addNode(35);
list.addNode(45);
list.addNode(55);
list.addNode(65);



console.log("Linked List is : ",list.displayList());
console.log();

console.log("Size of LinkedList is : "+list.size());
console.log();

list.deleteFirst();
console.log("First Element Deleted From the LinkedList : "+list.displayList());
console.log();

list.addAtPossition(35,3);
console.log("Insert at possition in LinkedList : "+list.displayList());
console.log();

list.addFirst(10);
console.log("Insert at First Possition in LinkedList : "+list.displayList());
console.log();

list.deleteLast()
console.log("Delete at Last Possition in LinkedList : "+list.displayList());
console.log();

var pos = read.question("Enter Possition to delete : ");
list.deletePossition(pos);
console.log("Delete element in Given Possition : "+list.displayList());
console.log();

var search = read.questionInt("Enter element to search : ");
console.log("Searched Element is : "+list.search(search));
console.log();