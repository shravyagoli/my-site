// ADD NEW ITEM TO END OF LIST
// element <ul>
var list = document.getElementsByTagName('ul')[0];
//create a new element
var newItemLast = document.createElement('li');
// create a TextNode
var newTextLast = document.createTextNode('cream');
// add this TextNode to the element
newItemLast.appendChild(newTextLast);
//add element at the end
list.appendChild(newItemLast);

// ADD NEW ITEM START OF LIST
//create the element
var newItemFirst = document.createElement('li');
//create the textnode
var newTextFirst = document.createTextNode('kale');
//add the node to element
newItemFirst.appendChild(newTextFirst);
// add elemt to the list
list.insertBefore(newItemFirst, list.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
// here are <li> elements
var listItems = document.querySelectorAll('li');
// declare counter variable
var i;
// for loop for the elements
for(i=0; i < listItems.length; i++)
    {
        // class name changed to cool
        listItems[i].className = 'cool';
    }

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// goes to h2 element
var heading = document.querySelector('h2');
// h2 text
var headingText = heading.firstChild.nodeValue;
// list elements
var totalItems = listItems.length;
// total content 
var newHeading = headingText + '<span>' + totalItems + '</span>';
// h2 will be updated by innerHTML
heading.innerHTML=newHeading;