import React from "react";



const Books = (props)=>{
   const {book, addToCart} = props
   const {bookID, book_title,urthor,genre,year_published,created_on,updated_on} = book
    return <div className="book-card">
        <div>
       <h3>{book_title} </h3> 
        <p> Urthor :  {urthor}</p> 
        <p>Genre : {genre}</p>
        <p>Year Published : {year_published}</p>
        <button onClick={()=> addToCart(book)} className="btn btn-primary">Add to cart</button>
        </div>



        </div>
}




export default Books