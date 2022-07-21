const showForm = document.querySelector('#showForm');
const form = document.querySelector('#bookForm');
let myLibrary = [];
let newBook;
// hide the form
form.style.display = "none";

// Book contructor
function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
}

// eventlister reveals form
showForm.addEventListener("click", () => {
  form.style.display === "none" ? form.style.display = "block" : form.style.display = "none" ;
});

// eventlistener to get user input on form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formValue = e.target;
  newBook = new Book(
    formValue.titleBook.value,
    formValue.authorBook.value,
    formValue.pagesBook.value,
    formValue.readBook.checked);

    myLibrary.push(newBook);
    form.reset();
    alert(JSON.stringify(newBook));
});
