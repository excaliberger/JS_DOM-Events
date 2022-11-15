console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

document.getElementById("node1").textContent = 'I used the getElementById("node1") method to access this';
document.getElementsByClassName("node2")[0].textContent = 'I used the getElementByClassName("node2") method to access this';

const byTagName = document.getElementsByTagName("h3");

for (let eleH3 of byTagName ) {
    eleH3.textContent = 'I used the getElementByTagName("h3") method to access all of these';
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

let e2Container = document.getElementById("parent") 
let paragraph = document.createElement("p");
let anchor = document.createElement("a");
paragraph.textContent = 'This node was created using the createElement() method';
anchor.textContent = "I am a <a> tag";
anchor.href = "https://www.pinterest.com/";
anchor.style.color = "white";


e2Container.appendChild(paragraph);
e2Container.appendChild(anchor);
e2Container.insertBefore(anchor, paragraph);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

let e3Container = document.getElementById("exercise-container3");
let oldChild = document.getElementById("N1");
let newChild = document.createElement("p");
newChild.textContent = "New Child Node";

e3Container.appendChild(newChild);
e3Container.replaceChild(newChild, oldChild);

e3Container.removeChild(newChild);

/*----------- Exercise #4: LIST ITEMS ----------- */

let e4Container = document.getElementsByClassName("exercise4")[0];
let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];
let shoppingList = document.createElement("ul");
let itemsSeparated = list.map((item) => {
    let listItem = document.createElement("li");
    listItem.textContent = item;
    shoppingList.appendChild(listItem);
    listItem.style.textAlign = "left";
});

e4Container.appendChild(shoppingList);
// shoppingList.appendChild(itemsSeparated);

/*----------- Exercise #5: DOM EVENTS --------------*/

const e5Container = document.getElementsByClassName("exercise5")[0];

function show() {
    let modal = document.createElement("div");
    let btnDiv = document.createElement("div");
    let modalTextContent = document.createElement("p");
    let closeBtn = document.createElement("btn");
    
    modal.id = "modal";
    btnDiv.className = "modal-card";
    closeBtn.id = "btn";
    modalTextContent.id = "modalTextContent";

    e5Container.appendChild(modal);
    modal.appendChild(btnDiv);
    btnDiv.appendChild(modalTextContent);
    btnDiv.appendChild(closeBtn);
    
    modalTextContent.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
    closeBtn.textContent = "Click to close";
   
    closeBtn.onclick = () => e5Container.removeChild(modal);
}

const btn = document.getElementById("btn");

btn.onclick = show;
