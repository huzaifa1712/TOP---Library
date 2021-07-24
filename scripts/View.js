/**
 * View class for handling DOM specific actions and selectors
 * Methods receive object as: { id: n, book: Book obj} so can easily access other props
 * as needed
 */
class View{
    #SELECTORS;
    constructor(){
         this.#SELECTORS = {
            LIBRARY: document.getElementById("library"),
            CARD_CLASS: "card",
            BTN_REMOVE_CLASS: "btn-remove"
        };
    }

    // input: Array of bookObjects with {id, book}
    // output: overwrite current display with these books
    displayBooks(bookObjects){
        if(bookObjects.length == 0){
            // use default functions
            this.#setEmptyBooksMessage();
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

    // handler function is passed in from Controller, execute handler with args from event listener on button
    bindRemoveAction(handler){

    }

    #createRemoveButton(id){
        const removeBtn = document.createElement("button");
        removeBtn.classList.add(this.#SELECTORS.BTN_REMOVE_CLASS);
        removeBtn.setAttribute("data-value", id);
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
        
        card.appendChild(removeBtn);

        return card;
    }

    // to set default message if no books
    #setEmptyBooksMessage(){
        const template = "<p> <strong> No books to display. </strong> </p>";
        this.#SELECTORS.LIBRARY.innerHTML = template;
    }
}

export default View;