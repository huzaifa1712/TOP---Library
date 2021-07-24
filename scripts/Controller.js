import BookData from './BookData.js';
import BookObject from './BookObject.js';
import View from './View.js';

function Controller(){
    

    // input: id: book pairs from BookData
    // output: Array of {id, book} objects according to BookObject
    function booksToBookObjects(books){
        return [...Object.keys(books)].reduce(
            (acc, key) => {
                const book = books[key];
                const meta = {id:key};
             
                return acc.concat(
                    BookObject(book, meta)
                );
            }, 
            []
        );
    }

    // get books from data source and display using View
    // convert to BookObject format before passing into View
    function init(){
        const bookData = new BookData();
        const view = new View();
        
        const books = bookData.getBooks();
        const bookObjects = booksToBookObjects(books);
        view.displayBooks(bookObjects);
    }

    return {
        init
    }
}

const controller = Controller();
controller.init();







// const data = new BookData();
// console.log(data.getBooks());
// data.addBook("title", "author", 20, true);
// console.log(data.getBooks());
// data.addBook("title2", "author2", 30, false);
// console.log(data.getBooks());
// data.addBook("title3", "author3", 50, true);
// console.log(data.getBooks());
// console.log(data.deleteBook(1));
// console.log(data.getBooks());

// data.addBook("title4", "author4", 20, false);
// console.log(data.getBooks());





