const inputBox= document.getElementById("input-box")
const listContainer= document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ''){ // if list is empty then alert display
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");// here we are creating list
        li.innerHTML=inputBox.value;        // adding value in the list
        listContainer.appendChild(li);     //list will be displayed in listcontainer
        let span= document.createElement("span") // creating span element
        span.innerHTML="\u00d7"; // in span element cross symbol added
        li.appendChild(span); // display the cross symbol in list
    }
    inputBox.value=''; // after input the value the inputbox become empty 
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");

}
showTask();
