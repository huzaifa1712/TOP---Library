/**
 * Handles CRUD operations on book data source and conversion to Book class
 * Represent books as Object with id:book
 */
import Book from './Book.js';


class BookData{
    #books;
    #id; // counter for next id to use for next book added
    constructor(){
        this.#books = this.#loadBooks();
        this.#id = [...Object.keys(this.#books)].reduce(
            function(acc,curr){
                return Math.max(acc, Number(curr));
            }
            0
        );
    }

    // load books from local storage if possible and convert to Book objects, return as id:book 
    // otherwise return empty object
    #loadBooks(){
        if(localStorage.length == 0){
            return {};
        }   

        // same format of id:book but they will be object literals instead of Book classes. must convert
        const bookObjects = JSON.parse(localStorage.getItem("books"));

        const booksAsClasses = {};

        for(let key in bookObjects){
            const {title, author, pages,read} = bookObjects[key];
            booksAsClasses[key] = new Book(title, author, pages, read);
        }

        return booksAsClasses;

    }

    // store current books object in DB
    #updateDB(){
        localStorage.setItem("books", JSON.stringify(this.#books));
    }

    

    // Create: add a book with requested info to data
    addBook(title, author, pages, read){
        const newBook = new Book(title, author, pages, read);
        const id = this.#getID();
        this.#books[id] = newBook;
        this.#updateDB();
        this.#incrementID();
        return {id, book:newBook};
    }


    // Read: Return an Object with Books
    // Use Object.assign to create a copy so can't be directly mutated
    getBooks(){
        return Object.assign({},this.#books);
    }

    idExists(id){
        return id in this.#books;
    }

    // Update: update value
    // int id, Object newProps with same property names 
    updateBook(id, newProps){
        // helper method to check if all props in newProps are existing in any book object - trust that 
        // object passed in is valid Book object. Doesn't check type
        function getValidNewProps(book){
            return [...Object.keys(newProps)].reduce(
                function(acc,key){
                    if(key in book){
                        acc[key] = newProps[key];
                        return acc;
                    }
                }, 
                {}
            );
        }

        if(this.idExists(id)){
            const curr = this.#books[id];
            newProps = getValidNewProps(curr);
            // this.#books[id] = {...curr, ...newProps};

            for (const key in newProps){
                curr[key] = newProps[key];
            }


            this.#updateDB();

            return {
                id,
                book:this.#books[id]
            }
        }

        return {}
    }

    // Delete with ID
    deleteBook(id){
        if(this.idExists(id)){
            delete this.#books[id];
            this.#updateDB();
            return true;
        }

        return false;
    }

    #getID(){
        return this.#id;
    }

    #incrementID(){
        this.#id++;
    }

    #addTestData(){
        const books= {
            0:new Book("Meditations", "Marcus Aurelius", 304, true),
            1:new Book("The Obstacle Is The Way", "Ryan Holiday", 224, false),
            2:new Book("Man's Search For Meaning", "Viktor Frankl", 200, false),
            3:new Book("The Three-Body Problem", "Liu Cixin", 302, true),
            4:new Book("1984", "George Orwell", 328, true),
            5:new Book("Animal Farm", "George Orwell", 112, true),
            6:new Book("A Brief History Of Time", "Stephen Hawking", 256, false)
        };
    
        localStorage.setItem("books", JSON.stringify(books));
        
    }

}

export default BookData;
