const box = document.querySelectorAll(".box")

const container =document.querySelector(".container")

box.forEach((e)=>{
    console.log(e);
    e.style.backgroundColor="red"
    box[2].style.backgroundColor="black"
    box[7].style.backgroundColor="black"
    // e.addEventListener("mouseover",()=>{ //just hover mouse over the element
    //     alert("Dont HOver here")
    // })
    // e.addEventListener("contextmenu",()=>{ //right Click
    //     alert("This is The Custom Menu ")
    // })
    // e.addEventListener("mousemove",()=>{ //just move
    //     alert("This is Mouse Move ")
    // })
    e.addEventListener("mousemove",()=>{ //just move
        alert("This is Mouse Move ")
    })


})


console.log(document.body.childNodes);
console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(container.firstChild);
console.log(container.lastChild);

