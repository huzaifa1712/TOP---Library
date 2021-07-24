/**
 * Object representation of Book class. Use prototype to make extensibility more efficient.
 * @param {String} title Title of the book
 * @param {String} author Author of the book
 * @param {Integer} pages Positive integer denoting number of pages in the book
 * @param {Boolean} read  Boolean indicating if the book has been read 
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