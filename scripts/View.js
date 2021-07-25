/**
 * View class for handling DOM specific actions and selectors
 * Methods receive object as: { id: n, book: Book obj} so can easily access other props
 * as needed
 */

/*
    Initialise View inside Controller with an object containing functions corresponding to add,remove etc
    handlers. Then use this object within View wherever necessary
*/
class View{
    #SELECTORS;
    constructor(handlers){
         this.#SELECTORS = {
            LIBRARY: document.getElementById("library"),
            CARD_CLASS: "card",
            BTN_REMOVE_CLASS: "btn-remove",
            BTN_VALUE: "data-value",
            NEW_BOOK_FORM:document.getElementById("new-book-form"),
            NEW_BOOK_BTN: document.getElementById("new-book"),
            NEW_BOOK_FORM_SUBMIT: document.getElementById("submit")
        };

        this.HANDLERS = handlers;

        this.#setup();
    }

    #setElementDisplay(element, show){
        const curr = element.style.display;

        // asking to show + currently not showing = show the elem
        if(show && curr == "none"){
            element.style.display = "";
        }

        // asking to hide + currently showing = hide the elem
        else if(curr == ""){
            element.style.display = "none";
        }
    }

    // set to the opposite of what it is. initial: true means show at first, false means don't show at first
    // use closures and HOF to create an abstract toggler function for any element, setting display also abstracted due to 
    // setElementDisplay
    #toggleElementDisplay(element, initial, showFn){

        this.#setElementDisplay(element, initial);

        return (() => {
            initial = !initial;

            if(initial && showFn){
                showFn(element);
            }

            this.#setElementDisplay(element, initial);
        });

    }   

    // can just use form.reset() inbuilt method
    #formClear(form){
        form.reset()
    }

    #formSetup(){
        const form = this.#SELECTORS.NEW_BOOK_FORM;
        form.style.display = "none";

        const formToggler = this.#toggleElementDisplay(form, false, this.#formClear);

        this.#SELECTORS.NEW_BOOK_BTN.addEventListener('click', function(){
            formToggler();

        }.bind(this));
    }

    #setup(){
        this.#formSetup();
    }

    

    // input: Array of bookObjects with {id, book}
    // output: overwrite current display with these books
    displayBooks(bookObjects){
        if(bookObjects.length == 0){
            // use default functions
            this.setEmptyBooksMessage();
            return;
        }
        bookObjects.forEach(bookObj => {
            this.addBookToDisplay(bookObj);
        });
    }

    // input: Book object
    // output: side effect of adding book to display
    addBookToDisplay(bookObj){
        const card = this.#bookToCard(bookObj);
        this.#SELECTORS.LIBRARY.appendChild(card);
    }

    

    #createRemoveButton(id){
        const removeBtn = document.createElement("button");
        removeBtn.classList.add(this.#SELECTORS.BTN_REMOVE_CLASS);
        removeBtn.setAttribute(this.#SELECTORS.BTN_VALUE, id);
        removeBtn.textContent = "Remove";

        return removeBtn;
    }
    // input: Book object conforming to Book class
    // output: div node
    #bookToCard(bookObj){
        const {id, book} = bookObj;
        const card = document.createElement("div");
        card.classList.add(this.#SELECTORS.CARD_CLASS);

        const removeBtn = this.#createRemoveButton(id);

        card.innerHTML = 
            `
            <h3>${book.title}</h3>
            <p class = "author">${book.author}</p>
            <p class = "pages">${book.pages} pages</p>
            <p class = "read">${book.getReadDesc()}</p>
            `
        
        removeBtn.addEventListener('click', function(){
            this.#SELECTORS.LIBRARY.removeChild(card);
            this.HANDLERS.removeBookHandler(id);        
        }.bind(this));

        card.appendChild(removeBtn);

        return card;
    }

    // to set default message if no books
    setEmptyBooksMessage(){
        const template = "<p> <strong> No books to display. </strong> </p>";
        this.#SELECTORS.LIBRARY.innerHTML = template;
    }
}

export default View;