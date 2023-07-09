// 1.Make the 2nd item have green background color

// 2.Make the 3rd item invisible


// 3.Using QuerySelectorALL change the font color to green for 2nd item in the item list

// 4.Choose all the odd elements and make their background green using QuerySelectorALL﻿


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


// listItemStyle.display = "none"



// let titles=document.querySelectorAll('.title')
// console.log(titles);
// li.style.backgroundColor='green';
// titles[0].textContent='pillo';
// let odd=document.querySelectorAll('li:nth-child(odd)');

// for(let i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor='red';
// }
let li=document.querySelectorAll('.list-group-item')
li[1].style.backgroundColor='green';
let listItems=document.querySelectorAll(".list-group-item");
listItems[2].style.display ="none";
li[1].style.color='green';

let odd=document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
}

