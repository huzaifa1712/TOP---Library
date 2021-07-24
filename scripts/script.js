
// function Book(title, author, pages, read){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// }

// Book.prototype.getReadDesc = function(){
//     return this.read ? "Read." : "Not read yet."
// }

// Book.prototype.getDescription = function(){
//     return `${this.title} by ${this.author}. ${this.pages} pages. ${this.getReadDesc()}`;
// }

// const books = [
//     new Book("Meditations", "Marcus Aurelius", 304, true),
//     new Book("The Obstacle Is The Way", "Ryan Holiday", 224, false),
//     new Book("Man's Search For Meaning", "Viktor Frankl", 200, false),
//     new Book("The Three-Body Problem", "Liu Cixin", 302, true),
//     new Book("1984", "George Orwell", 328, true),
//     new Book("Animal Farm", "George Orwell", 112, true),
//     new Book("A Brief History Of Time", "Stephen Hawking", 256, false)
// ]

const library = document.getElementById("library");

function bookToCard(book){
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = 
        `
         <h3>${book.title}</h3>
         <p class = "author">${book.author}</p>
         <p class = "pages">${book.pages} pages</p>
         <p class = "read">${book.getReadDesc()}</p>
         
         `
    return card;
}
//  const firstCard = bookToCard(books[0]);

// library.innerHTML += firstCard;
// library.innerHTML += firstCard;
// library.innerHTML += firstCard;
// library.innerHTML += firstCard;
// library.innerHTML += firstCard;

// books.forEach(book => library.appendChild(bookToCard(book))); 

import BookData from './BookData.js';
const data = new BookData();

console.log("Before Update 0");
console.log(data.getBooks());
console.log("After");
data.updateBook(0, {pages: 2});
console.log(data.getBooks());


