// 1.Add a new li element without the same class Name
// let li=document.getElementsByClassName="header-title"


// 2.And try editing it with getelementsbyclassname and then by getelementbytagname



// // GET ELEMENTS BY CLASSNAME
// let items=document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[1]);
// items[1].textContent='heloo';

// items[1].style.fontWeight='bold'
// items[1].style.backgroundColor='yellow';
// items[2].style.backgroundColor='pink';
// items[0].style.backgroundColor="red";

// // items.style.backgroundColor="blue";    =error
// // so insted of this we write the following for applying same back groud color to all elements at a Time
// for(let i=0;i<items.length;i++)
// {
//     items[i].style.backgroundColor='blue'
// }


// GET ELEMENTS BY TAGNAME

let li=document.getElementsByTagName('li')
console.log(li)
console.log(li[1]);
li[1].textContent='heloo';

li[1].style.fontWeight='bold'
li[1].style.backgroundColor='yellow';
li[2].style.backgroundColor='pink';
li[0].style.backgroundColor="red";

// items.style.backgroundColor="blue";    =error
// so insted of this we write the following for applying same back groud color to all elements at a Time
for(let i=0;i<li.length;i++)
{
    li[i].style.backgroundColor='blue'
}



// For downloading the HTML code which the youtuber uses use this link 