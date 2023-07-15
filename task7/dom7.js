// Now go head and add HEllo word before Item Lister
// Now go head and add HEllo word before Item 1


let newdiv = document.createElement('div');
console.log(newdiv);

//ADD CLASSNAME
newdiv.className="hello";

//ADD ID
newdiv.id="hello1";

//ADD ATTRIBUTE
newdiv.setAttribute('title' ,'Hello Div');

// CREATE A TEXT NODE
let newdivtext=document.createTextNode("Hello World!");

//ADD TEXT TO DIV
newdiv.appendChild(newdivtext);


//ADD THE CODE INTO WEBPAGE OR MAIN HTML FILE
let container = document.querySelector('header .container')
let h1 = document.querySelector('header h1');

newdiv.style.color="Orange";
newdiv.style.fontSize="35px"
container.insertBefore(newdiv, h1);

//CREATE NEW ELEMENT

//CREATE NEW DIV
let newDiv1 = document.createElement("div");
newDiv1.className = "list-group-item";
newDiv1.id = "hello2";
console.log(newDiv1);
//SetAttribute
newDiv1.setAttribute("title", "HELLo");

//CreatTextNode
let newDiv1Text = document.createTextNode("Hello World");
// Add Text To Div (AppendChild)
newDiv1.appendChild(newDiv1Text);

const uiContainer = document.querySelector("div ul");
console.log(uiContainer);
const liCon = document.querySelector("div li");
console.log(liCon);
uiContainer.insertBefore(newDiv1, liCon);
