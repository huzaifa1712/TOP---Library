import BookData from './BookData.js';
import BookWrapper from './BookWrapper.js';
import View from './View.js';

function Controller(){
    // input: id: book pairs from BookData
    // output: Array of {id, book} objects according to BookWrapper
    function booksToBookObjects(books){
        return [...Object.keys(books)].reduce(
            (acc, key) => {
                const book = books[key];
                const meta = {id:key};
             
                return acc.concat(
                    BookWrapper(book, meta)
                );
            }, 
            []
        );
    }

    // input: input from form as key-value pairs object, output: side effect of adding book to display and model
    function addBookHandler(formInput){
        let {
            "input-title": title,
            "input-author":author,
            "input-pages":pages,
            "input-read":read
        } = formInput;

        const bookObj =  bookData.addBook(title, author, pages, read);

        view.addBookToDisplay(bookObj);
    }

    function removeBookHandler(id){
        bookData.deleteBook(id);

        if(Object.keys(bookData.getBooks()).length == 0){
            view.setEmptyBooksMessage();
        }
    }


    function updateBookHandler(id, newProps){

        const newBook = bookData.updateBook(id, newProps);
        const book = newBook.book;

        return book;
    }

    const bookData = new BookData();
    const view = new View({
        addBookHandler,
        removeBookHandler,
        updateBookHandler
    });

    // get books from data source and display using View
    // convert to BookObject format before passing into View
    function init(){
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




