let form =document.getElementById("addForm")
let itemList=document.getElementById("items")
let filter=document.getElementById('filter');
// FORM SUBMIT Event

// addEventListener() method in JavaScript. It is used to attach an event listener to a specified element on a webpage. This method allows you to define a function (callback) that will be executed when a particular event occurs on the specified element.

// The general syntax for addEventListener() is as follows:
// element.addEventListener(event, callback);
form.addEventListener('submit',addItem);

// DELETEE Event
itemList.addEventListener("click",removeItem)
// here if we click Automatically removeITEM FUNCTION Will GET CALLED

//FILTER EVENT
filter.addEventListener('keyup',filterItems);




// ADDITEM
function addItem(e){
    e.preventDefault();
     // console.log(1)

// GET INPUT VALUE
let newItem=document.getElementById("item").value;

// CREATEING NEW LI ELEMENT
let additionaLi=document.createElement('li')
// console.log(additionaLi)

// ADD class
additionaLi.className='list-group-item';

// ADD TEXT NODE WITH INPUT VALUE
additionaLi.appendChild(document.createTextNode(newItem));


// CREATE DELETE BUTTON ELEMENT
let xBtn=document.createElement('button')

// ADD CLASSSES TO DELETE BUTTON
xBtn.className="btn btn-danger btn-sm float-right delete";


// APPEND TEXT NODE
xBtn.appendChild(document.createTextNode('X'));

// APPEND BUTTON TO additionaLi
additionaLi.appendChild(xBtn);

// APPEND LI TO LIST
itemList.appendChild(additionaLi);

}

// REMOVE ITEM
function removeItem(e){
    if(e.target.classList.contains('delete')){
        // The code `e.target.classList.contains('delete')` is used to check if the element that triggered the event (`e`) has a CSS class named "delete."  
        // console.log(1)
        if(confirm('are you sure ?'))
        {
            let additionaLi = e.target.parentElement;
            itemList.removeChild(additionaLi);
        }
    } 
}
   
// FILTER ITEMS
function filterItems(e){
    // convert text into lower case
    let text = e.target.value.toLowerCase();
// The code `e.target.value.toLowerCase()` is used to convert the value of an input element to lowercase.
// console.log(text)


// GET LIST
let items =itemList.getElementsByTagName('li')

// CONVERT TO AN ARRAY
Array.from(items).forEach(function(item)
{
    let itemName =item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display ='block';
    } else{
        item.style.display='none';
        
    }
});


}










