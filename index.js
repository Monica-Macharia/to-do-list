// function changeDay(newDay){
//     let day = document.querySelector(".day")
//     day.innerText = newDay
// }
// changeDay("Sunday")

//get the current day
 function currentDay(){
     const weekday= ["Sunday", "Monday", "Teusday", "Wednesday", "Thursday", "Friday", "Saturday"]
     let day = new Date()
     let word = day.getDay()
     let newDay = (weekday[word])
     document.querySelector(".day").style.color = "red"
     document.querySelector(".day").innerText = newDay
   
 }
 currentDay()

function changeTitle(newTitle){
    let h2 =document.querySelector("h2")
    h2.textContent = newTitle
}
changeTitle("Todo List")

//using style attribute on the DOM
function changeButtonColor(){
  
    document.querySelector(".submit").style.color= "blue"
    document.querySelector(".alert").style.color="blue"
    document.querySelector(".display").style.color="blue"
}
changeButtonColor()

//using innerHTML on the DOM
// function changeHTML(){
//     document.querySelector(".go").innerHTML = "<h1> I am changed </h1>"
// }

// changeHTML()

//remove element
// function removeElements(){
//     document.querySelector(".go").remove()
// }
// removeElements()