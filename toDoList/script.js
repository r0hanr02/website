const  inputText = document.querySelector("#input")
const  button = document.querySelector("#btn")
const  result = document.querySelector(".result")

button.addEventListener("click",()=>{
    const text = inputText.value;

    if(text == ""){
        alert("Enter String")
    }
    else{
        
        const div = document.createElement("div")
        result.appendChild(div)
        const span = document.createElement("span")
        div.appendChild(span)
        span.innerHTML=text
        const button = document.createElement("button")
        button.innerHTML="Delete"
        div.appendChild(button)
        inputText.value = ""
        button.addEventListener("click",()=>{
            // alert("If You want to Remove it Refresh the Page")
            div.remove()
        }) 
    }
})

