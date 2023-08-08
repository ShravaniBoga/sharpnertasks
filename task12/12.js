function saveToLocalStorage(event) {
  event.preventDefault();
  const name = event.target.username.value;
  const email = event.target.emailId.value;
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);

  // task11---> !!!!Now try storing the user details as an object in the local storage.
  const obj = {
    name,
    email,
  };
  // *****EXPLAINATION****
  // localStorage -----.only accepts "STRING" DATATYPE
  // SO HERE KEY --->IS ALWAYS STRING NO PROBLEM
  // BUT VALUE IS OBJECT TYPE IT SHOULD BE COVERTED INTO STRING BY--->JSON.stringify(obj)
  localStorage.setItem("obj.email", JSON.stringify(obj));
  showUserOnScrreen(obj);
}
function showUserOnScrreen(obj) {
  const parentElement = document.getElementById("items");

  const child = document.createElement("list-group-item");
  child.textContent = obj.name + "-" + obj.email;
  parentElement.appendChild(child);
}

let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

// FORM SUBMIT Event

// addEventListener() method in JavaScript. It is used to attach an event listener to a specified element on a webpage. This method allows you to define a function (callback) that will be executed when a particular event occurs on the specified element.

// The general syntax for addEventListener() is as follows:
// element.addEventListener(event, callback);
form.addEventListener("submit", addItem);

// DELETEE Event
itemList.addEventListener("click", removeItem);
// here if we click Automatically removeITEM FUNCTION Will GET CALLED

//FILTER EVENT
filter.addEventListener("keyup", filterItems);

// ADDITEM
function addItem(e) {
  e.preventDefault();
  // console.log(1)

  // GET INPUT VALUE
  let newItem = document.getElementById("item").value;
  let description = document.getElementById("description").value;
  // CREATEING NEW LI ELEMENT
  let additionaLi = document.createElement("li");
  // console.log(additionaLi)

  // ADD class
  additionaLi.className = "list-group-item";

  // ADD TEXT NODE WITH INPUT VALUE
  additionaLi.appendChild(document.createTextNode(newItem));

  additionaLi.appendChild(document.createTextNode(description));

  // CREATE DELETE BUTTON ELEMENT
  let xBtn = document.createElement("button");

  // CREATE edit BUTTON ELEMENT
  let edit = document.createElement("button");
  console.log(edit);

  // ADD CLASSSES TO edit BUTTON
  edit.className = "btn btn-danger btn-sm float-right delete";

  // APPEND TEXT NODE
  edit.appendChild(document.createTextNode("EDIT"));

  // APPEND BUTTON TO additionaLi
  additionaLi.appendChild(edit);

  // APPEND LI TO LIST
  itemList.appendChild(additionaLi);

  // ADD CLASSSES TO DELETE BUTTON
  xBtn.className = "btn btn-danger btn-sm float-right delete";

  // APPEND TEXT NODE
  xBtn.appendChild(document.createTextNode("X"));

  // APPEND BUTTON TO additionaLi
  additionaLi.appendChild(xBtn);

  // APPEND LI TO LIST
  itemList.appendChild(additionaLi);
}

// REMOVE ITEM
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    // The code `e.target.classList.contains('delete')` is used to check if the element that triggered the event (`e`) has a CSS class named "delete."
    // console.log(1)
    if (confirm("are you sure ?")) {
      let additionaLi = e.target.parentElement;
      itemList.removeChild(additionaLi);
    }
  }
}

// FILTER ITEMS
function filterItems(e) {
  // convert text into lower case
  let text = e.target.value.toLowerCase();
  // The code `e.target.value.toLowerCase()` is used to convert the value of an input element to lowercase.
  // console.log(text)

  // GET LIST
  let items = itemList.getElementsByTagName("li"); //array of nodes

  // CONVERT TO AN ARRAY
  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent;
    const description = item.childNodes[1].textContent;
    if (
      itemName.toLowerCase().indexOf(text) != -1 ||
      description.toLowerCase().indexOf(text) != -1
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
