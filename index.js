//state
let currentElement = "";
localStorage.getItem("state") ? document.querySelector("main").innerHTML = localStorage.getItem("state") : console.log("do nohitng");

//drag listeners
Array.from(document.getElementsByClassName('dragEl')).forEach(el=>{
    el.addEventListener("dragstart",dragStart);
    el.addEventListener("dragend",dragEnd);
});

//drag function
function dragStart(){
    setTimeout(() => {
        this.style.display="none";
    }, 0);
    
    currentElement = this;
console.log("start");
}

function dragEnd(){
    this.style.display="block";
    let mainContent = document.querySelector("main").innerHTML;
    localStorage.setItem("state",mainContent);
    currentElement = "";
console.log("end");
}

//drop listeners
Array.from(document.getElementsByClassName('box')).forEach(el=>{
    el.addEventListener("dragover",dragOver);
    el.addEventListener("dragenter",dragEnter);
    el.addEventListener("dragleave",dragLeave);
    el.addEventListener("drop",drop);
});

function dragOver(e){
    e.preventDefault();
    console.log("over");
}
function dragEnter(e){
    e.preventDefault();
    this.classList.add("bg");
    console.log("enter");
}
function dragLeave(){
    this.classList.remove("bg");
    console.log("leave");
}
function drop(){
    this.classList.remove("bg");
    this.appendChild(currentElement);
    
    console.log("drop");
}
