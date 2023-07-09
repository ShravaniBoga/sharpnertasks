
// EXAMIN THE DOCUMENT OBJECT
console.dir(document);
// console.log(document.domain)
// //  127.0.0.1   =domain is badically my localhost loopback address
// console.log(document.URL);
// // gives page url  = http://127.0.0.1:5501/ex.html
// console.log(document.title)
// // document.title=13
// // console.log(document.title)
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
// document.all[10].textContent ='Hello';


// selectors   = 1getElementById
console.log(document.getElementById("header-title"))
var head=document.getElementById("header-title")
console.log(head);
// changing the inner content in the tag
// head.textContent= "baby i love u";
// head.innerText="overriding"
// console.log(head.textContent)


// here if we use style="display:none" in span of h1 then also 
// head.textContent didnot work 
// but when we use head.innerText it worked

// console.log(head.innerText)
head.innerHTML='<h3>hii</h3>';
// here h3 is inside the h1tag =herre dom considers innner element as id
 

// let header=document.getElementById('main-header')
// header.style.borderBottom ='solid 3px #000'


// GET ELEMENTS BY CLASSNAME
// let items=document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[1]);
// items[1].textContent='heloo';

// items[1].style.fontWeight='bold'
// // items[1].style.backgroundColor='yellow';
// // items[2].style.backgroundColor='pink';
// // items[0].style.backgroundColor="red";

// // items.style.backgroundColor="blue";    =error
// // so insted of this we write the following for applying same back groud color to all elements at a Time
// for(let i=0;i<items.length;i++)
// {
//     items[i].style.backgroundColor='blue'
// }


// 

// // QUERY SELECTOR
// let hi=document.querySelector('#main-header')
// hi.style.borderBottom= "solid 4px #red";

// var input=document.querySelector("input")
// input.value='hello world'

// var submit=document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item =document.querySelector('.list-group-item');
// item.style.color='red'
// var lastItem=document.querySelector
// ('.list-group-item:last-child');
// lastItem.style.color ='blue';

// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='coral'

// QUERY SELECTOR ALL
let titles=document.querySelectorAll('.title')
console.log(titles);
titles[0].textContent='pillo';
let odd=document.querySelectorAll('li:nth-child(odd)');

for(let i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='red';
}
