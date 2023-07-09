// GET ELEMENTS BY CLASSNAME
let items=document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[1]);
// items[1].textContent='heloo';

// items[1].style.fontWeight='bold'
items[2].style.backgroundColor='green';
// // items[2].style.backgroundColor='pink';
// // items[0].style.backgroundColor="red";

// // items.style.backgroundColor="blue";    =error
// // so insted of this we write the following for applying same back groud color to all elements at a Time
for(let i=0;i<items.length;i++)
{
    items[i].style.fontWeight='bold'
}
