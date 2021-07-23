class Book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    getDescription(){
        return `${this.title} by ${author}. ${pages} pages, ${read ? "read." : "Not read yet."}`;
    }
}

const books = [
    new Book("Meditations", "Marcus Aurelius", 304, true),
    new Book("The Obstacle Is The Way", "Ryan Holiday", 224, false),
    new Book("Man's Search For Meaning", "Viktor Frankl", 200, false),
    new Book("The Three-Body Problem", "Liu Cixin", 302, true),
    new Book("1984", "George Orwell", 328, true),
    new Book("Animal Farm", "George Orwell", 112, true)
]