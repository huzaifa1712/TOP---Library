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
        };
    }

    // input: Array of bookObjects with {id, book}
    // output: overwrite current display with these books
    displayBooks(bookObjects){
        bookObjects.array.array.forEach(bookObj => {
            this.addBookToDisplay(bookObj);
        });
    }

    // input: Book object
    // output: side effect of adding book to display
    addBookToDisplay(bookObj){
        const card = this.#bookToCard(bookObj);
        this.#SELECTORS.LIBRARY.appendChild(card);
    }

    // input: Book object conforming to Book class
    // output: div node
    #bookToCard(bookObj){
        const {id, book} = bookObj;
        const card = document.createElement("div");
        card.classList.add(this.#SELECTORS.CARD_CLASS);
        card.innerHTML = 
            `
            <h3>${book.title}, ID: ${id}</h3>
            <p class = "author">${book.author}</p>
            <p class = "pages">${book.pages} pages</p>
            <p class = "read">${book.getReadDesc()}</p>
            
            `
        return card;
    }
}