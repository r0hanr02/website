const follower = document.getElementById("follower")

document.addEventListener("mousemove",(event)=>{

    let {clientX, clientY} = event;
    // console.log(`Mouse at: ${event.clientX}, ${event.clientY}`);
    follower.style.transform=`translate(${clientX}px ,${clientY}px )`
})