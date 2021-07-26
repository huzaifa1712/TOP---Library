/**
 * Object representation of Book class. Use prototype to make extensibility more efficient.
 */
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.getReadDesc = function(){
    return this.read ? "Read." : "Not read yet."
}

Book.prototype.getDescription = function(){
    return `${this.title} by ${this.author}. ${this.pages} pages. ${this.getReadDesc()}`;
}


export default Book;