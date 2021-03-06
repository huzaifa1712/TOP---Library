/**
 * BookObject representation to turn Book objects from BookData to format for View
 * 
 */
function BookWrapper(book, metadata){
    const obj = {book};

    for(let key in metadata){
        obj[key] = metadata[key]
    }
    return obj;
}

export default BookWrapper;