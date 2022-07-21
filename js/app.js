const showForm = document.querySelector('#showForm');
const form = document.querySelector('#bookForm');
let myLibrary = [];


// hide the form
form.style.display = "none";

// eventlister reveals form
showForm.addEventListener("click", () => {
  form.style.display === "none" ? form.style.display = "block" : form.style.display = "none" ;
});


// eventlistener to get user input on form
form.addEventListener("submit", (e) => {
  e.preventDefault();
});


// Book contructor
function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}

function addBookToLibrary() {
  // do stuff here
}
