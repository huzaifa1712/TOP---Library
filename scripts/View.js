/**
 * View class for handling DOM specific actions and selectors
 */
class View{
    #SELECTORS;
    constructor(){
         this.#SELECTORS = {
            LIBRARY: document.getElementById("library"),
            CARD_CLASS: "card",
        };
    }

    // input: Book object
    // output: side effect of adding book to display
    addBookToDisplay(book){
        const card = this.#bookToCard(book);
        this.#SELECTORS.LIBRARY.appendChild(card);
    }

    // input: Book object conforming to Book class
    // output: div node
    #bookToCard(book){
        const card = document.createElement("div");
        card.classList.add(this.#SELECTORS.CARD_CLASS);
        card.innerHTML = 
            `
            <h3>${book.title}</h3>
            <p class = "author">${book.author}</p>
            <p class = "pages">${book.pages} pages</p>
            <p class = "read">${book.getReadDesc()}</p>
            
            `
        return card;
    }
}