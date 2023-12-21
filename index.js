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
    if(validate(inputField.value.trim())){
	    //appending the template to the  gallerylist  which is the ul//
		gallery.innerHTML += generateListItem(inputField.value.trim())
    	popList(inputField.value.trim())  
    	galleryForm.reset();
		}
});

//delete d todo//
gallery.addEventListener("click", (e) =>{
    //condition to check if the delete icon was clicked//
 const value = e.target.parentElement.parentElement.previousElementSibling.innerHTML;
    if(e.target.classList.contains('delete')){
			popList(value,true)
    }
		if(e.target.classList.contains('edit')){
			inputField.value = value;
    }
      e.target.parentElement.parentElement.parentElement.remove()
})

//closing the pop list//
closePop.addEventListener("click", closePopup);

switchIcon.addEventListener("click", toogleMode)

//pop list//
function popList(text, isDelete){
	const para = showAllList.querySelector('p')
	const header = showAllList.querySelector('h4')
	if(text)  para.textContent = text 
 	showAllList.style.display = "block"
	if(isDelete){
		header.innerHTML = "Item&nbsp;Deleted"
	} else {
		header.innerHTML = "New&nbsp;Item"
	}
	setTimeout( closePopup, 5000)
}

function closePopup(){
    showAllList.style.display = "none"
}

//to change theme from dark to white mood//
function toogleMode(){
    switchIcon.classList.toggle("bx-sun")
    document.body.classList.toggle("dark-theme")
}

//form validation//
function validate(value){
    if(value.length > 0){
       message.innerHTML =""
			return true;
    } else {
        message.innerHTML = "input can't be empty"
			return false;
    }
}
//getting the value the user input//
function generateListItem(input_field){
   const template =
    `<li class="box">
        <h1>${input_field}<h1>
        <div class="icon">
        <i class='bx bx-trash delete'></i>
        <i class='bx bx-edit edit'"></i>
        </div>                    
   </li>`
	 return template;
}
