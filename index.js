// function changeDay(newDay){
//     let day = document.querySelector(".day")
//     day.innerText = newDay
// }
// changeDay("Sunday")

//get the current day
//  function currentDay(){
//      const weekday= ["Sunday", "Monday", "Teusday", "Wednesday", "Thursday", "Friday", "Saturday"]
//      let day = new Date()
//      let word = day.getDay()
//      let newDay = (weekday[word])
//      document.querySelector(".day").style.color = "red"
//      document.querySelector(".day").innerText = newDay
   
//  }
//  currentDay()

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

//Creating elements


// function createElements(){
//    let newer=document.createElement("div")
//    let content = "<h1>This is nice</h1>"
//    newer.append(content)
//     console.log(newer)
// }
//not working though



//Adding functionality -ALERT BUTTON

//pseudocode
//Grab the button - document.query method
//call addEventListener on the button
//create an alert

document.querySelector(".alert").addEventListener("click", () => alert("I have been clicked!"))

//Adding a click event to the DISPLAY button.

//pseudocode
//grab the button 
//call an event listener on it
//console.log something

document.querySelector(".display").addEventListener("click", function(e){
    e.target.style.backgroundColor = "green"
      
}) 

//DELETE a parentNode through Click event

//pseudocode
//grab the button
//call an event listener to it "click"
//upon clicking it should delete the parent node, with it included.

// document.querySelector(".btn").addEventListener("click", function(e){
//     console.log(e.target.parentNode.remove())
// })

//DISPLAY ON THE DOM THE VALUE SUBMITTED THROUGH FORM

//Pseudocode

//function1
 //grab the submit button
 //eventlistener "submit" on the submit button.
 //callback function that grabs the entered value e.target.inputclass.value
 //feed the value to function2
 //prevent the form from refreshing preventDefault
 //reset() the form

 //function2
 //grab a div
 //create a h5 tag as a child of the div
 //create a delete button as a child of h5
 //and an eventlistener to the button
 //p.innertext = "incoming value from form"

//funtion3
//deletes the button and the parent contents upon clicking 
//feed to fucntion2 as a callback for the eventlistener

document.addEventListener('DOMContentLoaded', ()=>{
    
    
    //handles form default, reset and grabs incoming data
    let form = document.querySelector("form")
    form.addEventListener("submit", function(e){
        e.preventDefault()
        handleChange(e.target.newDo.value)
        form.reset()
    })

    //create new elements on the DOM from incoming data
    function handleChange(newToDo){
       let container = document.querySelector(".incoming")
       let content = document.createElement("h5")
       let btn = document.createElement("button")
        btn.textContent = "" + "x"
        handleDelete(btn)
        content.textContent = newToDo
        container.appendChild(content)
        content.appendChild( btn)
       
    }

    //deletes the incoming data
    function handleDelete(btn){
        btn.addEventListener("click", function(e){
            console.log(e.target.parentNode.remove())
        })
     }  
     
    



})