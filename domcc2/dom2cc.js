//  TRAVERSIING THE DOM 

let itemList  =document.querySelector('#items');
// // parentnode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor="#f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode);


// // parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor="#f4f4f4";
// console.log(itemList.parentElement.parentElement.parentElement);



// childNodes
// console.log(itemList.childNodes);
// text node represents the line break
// so instead of childnodes we use children
console.log(itemList.children);
// if we use children----- if we have line-break also it dinot shoe as text node in console 
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor="pink";





// firstChild
// console.log(itemList.firstChild);
// first child is waste of use cant get child item 


// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent="item 1=chicken 65";



// // lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent="item 4=chicke biryani";


// nextSibling
// console.log(itemList.nextSibling)
// nextElementSibling


// previousSibling
// console.log(itemList.previousSibling);
// no use of prviousSibling it is similar to childnode 
// it gives text node


// // // previousElementSibling
// console.log(itemList.previousElementSibling)   

// itemList.previousElementSibling.style.color='blue';



// jquery has many features like animation and popups but js is enough in dom , by using jquery length of code will be increase , but it has diff ammazing plugins in animatin



// createElement

// create a div
var newDiv =document.createElement('div')

// // add class
newDiv.className="berry";


// // add id
newDiv.id="baby";

// // add attr
newDiv.setAttribute('title','hello Div')

// create text Node
var newDivText=document.createTextNode("this is text node")

// // create text Node
newDiv.appendChild(newDivText)

var container=document.querySelector('header  .container');
var h1=document.querySelector('header h1');

console.log(newDiv)
newDiv.style.fontSize='30px';
container.insertBefore(newDiv, h1);

// now it is just in js we want to insert it into the dom



// Now go head and add HEllo word before Item Lister
// Now go head and add HEllo word before Item 1

