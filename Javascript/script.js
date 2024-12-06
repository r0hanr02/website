let characterCounter = document.getElementById("cCount")
let wordsCounter = document.getElementById("wCount")
let Result = document.getElementById("textarea")

Result.oninput=()=>{
    let characters = Result.value
    characterCounter.textContent=characters.replace(/\s/g,"").length

    let words = Result.value.split(" ").filter((items)=>{
        return items !="";
    })
    wordsCounter.textContent=words.length;
}