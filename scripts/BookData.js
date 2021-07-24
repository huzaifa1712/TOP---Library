/**
 * Handles CRUD operations on book data source and conversion to Book class
 * 
 */
import Book from './Book.js';

class BookData{
    #books;
    #id; // counter for next id to use for next book added
    constructor(){
        console.log("hey");

        // Use a object with id as key, Book object as value for easier access/update
        this.#books = {
            0:new Book("Meditations", "Marcus Aurelius", 304, true),
            1:new Book("The Obstacle Is The Way", "Ryan Holiday", 224, false),
            2:new Book("Man's Search For Meaning", "Viktor Frankl", 200, false),
            3:new Book("The Three-Body Problem", "Liu Cixin", 302, true),
            4:new Book("1984", "George Orwell", 328, true),
            5:new Book("Animal Farm", "George Orwell", 112, true),
            6:new Book("A Brief History Of Time", "Stephen Hawking", 256, false)
        };

    }

    // Return an array of Book objects
    getBooks(){
        return Object.values(this.#books);
    }
}

export default BookData;
