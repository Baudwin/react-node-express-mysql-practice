import React, { useEffect, useState } from 'react';
import '../App.css';
import Axios from 'axios';
import Navbar from './Navbar';
import Form from './Form';
import { Route , BrowserRouter, Router, Link } from 'react-router-dom';
import Books from './Books';
import Cart from './Cartbtn';
import DisplayCart from './CartPreview';


function App() {
const [books, setBooks] = useState([])
const [newbook , setNewbook] = useState({
  book_title : "",
  urthor : "",
  genre: "",
  year_published : ""
})

const [cart, setCart] = useState([])
const [clicked , setClicked] = useState(false)

// const handleChange = (event) =>{
//   let {name,value} = event.target
// setNewbook((prevValue)=>{
// return {
//   ...prevValue,
//   [name]:value
// }
// })
//  }



  useEffect(()=>{
    Axios.get("http://127.0.0.1:1000/books").then((response)=>{
    setBooks(response.data);
  }).catch((err)=>{
    console.log(err);
  })
  },[])

// const addBook = (event)=>{
//   Axios.post("http://127.0.0.1:1000/add-book", newbook).then((response)=>{
//   }).catch((err)=>{
//     console.log(err);
//   })
// setNewbook({
//   book_title : "",
//   urthor : "",
//   genre: "",
//   year_published : ""
// })
//   event.preventDefault()
// }

const addToCart = (book)=>{
  if (cart.indexOf(book) !== -1){
return
  } 
setCart(prevValue=>{
  return [...prevValue,book]
})

}

const showCart =()=>{
setClicked(true)
}

  return (
    <div  className="App">
<Navbar att="Faq" cart = {<Cart cart = {cart} showCart = {showCart}  />} />
{clicked?<DisplayCart cart = {cart} />:null}
{/* {
  books.map(book=> <Books key = {book.bookID} 
    id = {book.bookID} title={book.book_title} 
    urthor= {book.urthor} genre = {book.genre}
    year_published={book.year_published} 
    created_on = {book.created_on} addToCart = {addToCart} /> )
} */}


 {books.map(book=> <Books key={book.bookID} book={book} addToCart = {addToCart} />)}

{/* <Form/> */}

































{/* <h1 style={{color:"orange"}}>My Books</h1>
<p>Click to delete</p> */}

{/* {books.map((book, index)=>{
 return <a key={index} href={`http://127.0.0.1:1000/delete-book/${book.bookID}`}> <h4> {index}<span>)</span> {book.book_title}</h4> </a> 
 
})} */}

{/* <form >
  <label htmlFor="">Title</label>
  <input onChange={handleChange} type="text" value={newbook.book_title} name="book_title" id="" />
  <label htmlFor="">Urthor</label>
  <input onChange={handleChange} type="text" value={newbook.urthor}  name="urthor" id="urthor" />
  <label htmlFor="">Genre</label>
  <input onChange={handleChange} type="text" value={newbook.genre} name="genre" id="genre" />
  <label htmlFor="">Year</label>
  <input onChange={handleChange} type="text" name="year_published" value={newbook.year_published} id="year_published" />
  <button onClick={addBook} >Submit</button>
</form> */}





    </div>
  );
}

export default App;
