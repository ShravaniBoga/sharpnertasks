
// // // var form = document.getElementById('addForm');
// // // var itemList = document.getElementById('items');
// // // var filter = document.getElementById('filter');

// // // // Form submit event
// // // form.addEventListener('submit', addItem);
// // // // Delete event
// // // itemList.addEventListener('click', removeItem);
// // // // Filter event
// // // filter.addEventListener('keyup', filterItems);

// // // // Add item
// // // function addItem(e){
// // //   e.preventDefault();

// // //   // Get input value
// // //   var newItem = document.getElementById('item').value;


// // // On clicking the delete button we should be able to remove the newly created li tag
// // // Now add an edit button next to the delete icon.[Dont have to build the Edit  functionality, just add the button]
// // // DOM manipulation key takeaways that you would need and should remember. Watch this video - 


// var form =document.getElementById('addForm');
// var itemList=document.getElementById('item');

// // form submit event
// form.addEventListener('submit',addItem);

// // add item

// function addItem(e){
    
//     // e is event paremeter e  means event parameter or event object
//     e.preventDefault();
//     var inputValue = document.getElementById('item').value;
//     var description = document.getElementById('description').value;
  
  
     
//     var li = document.createElement('li');
   
//     li.className = 'list-group-item';
  
//     let newText = document.createTextNode(inputValue);
//     let descriptionNode = document.createTextNode(" " + description);
  
    
//     li.appendChild(newText);
//     li.appendChild(descriptionNode);
//     itemList.appendChild(li)
//   }



// //     // intial behavior has be prevent for form or normal submission of form not happen
// //     // console.log(1)


// //     // get input value

// //     var newItem =document.getElementById('item').value;
// //    var description = document.getElementById('description'.value)
   
// //     // create new li element 
// //     var li =document.createElement('li')
// //     li.className='list-group-item';
// //     let newText=document.createTextNode(inputvalue)
// //     let descriptionNode=document.createTextNode(" " + description) 


// //     // ADD  text  node with input value
// //     li.appendChild(newText)
// //     li.appendchild(descriptionNode)

// //     li.appendChild(document.createTextNode(newItem));
// //     itemList.appendChild(li);
// // }


    

  












// // var form = document.getElementById('addForm');
// // var itemList=document.getElementById('items');
// // // form submit Event
// // form.addEventListener('submit',addItem);

// // // Add item
// // function addItem(e){
// //     e.preventDefault();
// //     // get input value

// // }



// var form = document.getElementById('addForm');
// var itemList = document.getElementById('items');
// // var filter = document.getElementById('filter');

// // Form submit event
// form.addEventListener('submit', addItem);
// // Delete event
// // itemList.addEventListener('click', removeItem);
// // // Filter event
// filter.addEventListener('keyup', filterItems);

// // Add item
// function addItem(e){
//   e.preventDefault();

//   // Get input value
//   var newItem = document.getElementById('item').value;

//   // Create new li element
//   var li = document.createElement('li');
//   // Add class
//   li.className = 'list-group-item';
//   // Add text node with input value
//   li.appendChild(document.createTextNode(newItem));

//   // Create del button element
//   var deleteBtn = document.createElement('button');

//   // Add classes to del button
//   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//   // Append text node
//   deleteBtn.appendChild(document.createTextNode('X'));

//   // Append button to li
//   li.appendChild(deleteBtn);

//   // Append li to list
//   itemList.appendChild(li);
// }

// // // Remove item
// // function removeItem(e){
// //   if(e.target.classList.contains('delete')){
// //     if(confirm('Are You Sure?')){
// //       var li = e.target.parentElement;
// //       itemList.removeChild(li);
// //     }
// //   }
// // }

// // // Filter Items
// // function filterItems(e){
// //   // convert text to lowercase
// //   var text = e.target.value.toLowerCase();
// //   // Get lis
// //   var items = itemList.getElementsByTagName('li');
// //   // Convert to an array
// //   Array.from(items).forEach(function(item){
// //     var itemName = item.firstChild.textContent;
// //     if(itemName.toLowerCase().indexOf(text) != -1){
// //       item.style.display = 'block';
// //     } else {
// //       item.style.display = 'none';
// //     }
// //   });
// // }













// var form = document.getElementById('addForm');
// console.log(form)
// var itemList = document.getElementById('items');

// form.addEventListener('submit', addItem);
// // addEventListener to tell wt to happpen   clik=submit; addItem= callback fuctn
// itemList.addEventListener('click',removeItem)
// function addItem(a){
//   // after submitting we will get event object
//   a.preventDefault();

// var inputValue = document.getElementById('item').value;
// // .value =give u value of partvular itembox 


   
//   var li = document.createElement('li');
 
//   li.className = 'list-group-item';

//   let newText = document.createTextNode(inputValue);
//   // to addd inputdata to item box
  
  
//   li.appendChild(newText);

  
//   // create delet button element 
//   var button=document.createElement(button)
//   itemList.appendChild(li); 
//   //  itemList.appendChild(li)  is for disply



// // CREATE DEL BUTTON ELEMENT
// var deletebtn=document.createElement('button');


// // ADD CLASES TO DEL BTN
// deleteBtn.className='btn btn-danger btn-sm float-right delete'

// //APPPEND TEXT NODDE
// deleteBtn.appendChild(documnet.createTextNode('x'))

// // APPEND BUTTON TO li
// li.appendChild(deleteBtn)
// //APPENF LI TO LIST
// itemList.appendChild(li);
// }
// // REMOVE ITEM
// function removeItem(e){
//   // console.log(1)
//   if(e.target.classList.contains('delete')){
//     console.log(1);
    

//   }
// }


let form =document.getElementById("addForm")
let iL=document.getElementById("items")

// FORM SUBMIT Event

// addEventListener() method in JavaScript. It is used to attach an event listener to a specified element on a webpage. This method allows you to define a function (callback) that will be executed when a particular event occurs on the specified element.

// The general syntax for addEventListener() is as follows:
// element.addEventListener(event, callback);

form.addEventListener('submit',addItem);

// ADDITEM
function addItem(e){
    e.preventDefault();
    // console.log(1)

// GET INPUT VALUE
let newItem=document.getElementById("item").value;

// CREATEING NEW LI ELEMENT
let li=document.createElement('li')

// ADD class
li.className='list-group-item';

// ADD TEXT NODE WITH INPUT VALUE
li.appendChild(document.createTextNode(newItem));

itemList.appendChild(li);






}
