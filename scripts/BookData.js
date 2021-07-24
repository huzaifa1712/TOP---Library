/**
 * Handles CRUD operations on book data source and conversion to Book class
 * 
 */
import Book from './Book.js';

class BookData{
    #books;
    constructor(){
        console.log("hey");
        this.#books = [
            new Book("Meditations", "Marcus Aurelius", 304, true),
            new Book("The Obstacle Is The Way", "Ryan Holiday", 224, false),
            new Book("Man's Search For Meaning", "Viktor Frankl", 200, false),
            new Book("The Three-Body Problem", "Liu Cixin", 302, true),
            new Book("1984", "George Orwell", 328, true),
            new Book("Animal Farm", "George Orwell", 112, true),
            new Book("A Brief History Of Time", "Stephen Hawking", 256, false)
        ];

    }

    getBooks(){
        return this.#books;
    }
}

export default BookData;
