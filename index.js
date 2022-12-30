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

function changeButtonColor(){
  
    document.querySelector(".submit").style.color= "blue"
    document.querySelector(".alert").style.color="blue"
    document.querySelector(".display").style.color="blue"
}
changeButtonColor()

