const  inputText = document.querySelector("#input")
const  button = document.querySelector("#btn")
const  result = document.querySelector(".result")
const leftBox = document.querySelector("#leftBox")
const rightBox = document.querySelector("#rightBox")

button.addEventListener("click",()=>{
    const text = inputText.value;

    if(text == ""){
        alert("Enter String")
    }
    else{
        
        const div = document.createElement("div")
        div.className="dragDiv"
        div.draggable=true
        leftBox.appendChild(div)
        const span = document.createElement("span")
        div.appendChild(span)
        span.innerHTML=text
        const button = document.createElement("button")
        button.innerHTML="Delete"
        div.appendChild(button)
        inputText.value = ""
        button.addEventListener("click",()=>{
            div.remove()
        }) 

        const items = document.getElementsByClassName("dragDiv");

        let selected = null;

        for(let item of items) {
    item.addEventListener("dragstart", function(e) {
        selected = e.target;
    })
}

rightBox.addEventListener("dragover", function(e) {
    e.preventDefault();
})

rightBox.addEventListener("drop", function(e) {
    if(selected) {
        rightBox.appendChild(selected);
        selected = null;
    }
})

leftBox.addEventListener("dragover", function(e) {
    e.preventDefault();
})

leftBox.addEventListener("drop", function(e) {
    if(selected) {
        leftBox.appendChild(selected);
        selected = null;
    }
})
    }
})

