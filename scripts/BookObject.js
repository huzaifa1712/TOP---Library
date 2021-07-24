/**
 * BookObject representation to turn Book objects from BookData to format for View
 * 
 */
function BookObject(book, metadata){
    const obj = {book};
    for(key in metadata){
        obj[key] = metadata[key]
    }
    return obj;

}

let book = {title:"title", author: "author"};
let meta = {id:1};
