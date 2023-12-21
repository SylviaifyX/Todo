const galleryForm = document.querySelector(".addList_items");
let inputField = document.getElementById("input_field");
let gallery = document.querySelector("#gallery-list");
let switchIcon = document.querySelector("#darkMode-icon")
let message = document.getElementById("msg")
let showAllList = document.getElementById("showListItems")
let closePop = document.querySelector(".close-pop-up")
let all = []



//calling the submit from the form when user input and click or listening for a submit event//
galleryForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    formValidation()
    showAll()
    setTimeout(popList, 1000)  
    galleryForm.reset();
});
//form validation//
let formValidation = () =>{
    let input_field = inputField.value.trim()  
    if(input_field.length){
        generateList(input_field);
        // console.log(generateList)
       message.innerHTML =""
    }if(!input_field){
        message.innerHTML = "input can't be empty"
    }
}
//getting the value the user input//
const generateList = (input_field) =>{
   const template =
    `<li class="box">
        <h1>${input_field}<h1>
        <div class="icon">
        <i class='bx bx-trash delete'></i>
        <i class='bx bx-edit edit'"></i>
        </div>                    
   </li>`

    //appending the template to the  gallerylist  which is the ul//
   gallery.innerHTML += template
   console.log(gallery)
}

//delete d todo//
gallery.addEventListener("click", (e) =>{
    //condition to check if the delete icon was clicked//
    // console.log(e)
    if(e.target.classList.contains('delete')){
        //navigating to the parentElement//
        e.target.parentElement.parentElement.parentElement.remove()
    }if(e.target.classList.contains('edit')){//edit to list//
        inputField.value= e.target.parentElement.parentElement.previousElementSibling.innerHTML
        e.target.parentElement.parentElement.parentElement.remove()
    }
    // }   console.log(inputField)
})

//to change theme from dark to white mood//
const ToogleMode = () =>{
    switchIcon.classList.toggle("bx-sun")
    document.body.classList.toggle("dark-theme")
}
switchIcon.addEventListener("click", ToogleMode)

let showAll = () =>{
    all.push =(inputField.value)
    all 
    console.log(all)

}

//pop list//
let popList = () =>{
 showAllList.style.display = "block"
}
//closing the pop list//
closePop.addEventListener("click", () => {
    showAllList.style.display = "none"
});