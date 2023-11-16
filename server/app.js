const express = require('express')
const app = express()
const db = require("./config/db")
const PORT = 1000
const cors = require("cors")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


// GET ALL BOOKS
app.get("/books", async (req, res) => {
    try {
        const sqlQuery = `SELECT * FROM Book`
        const [books] = await db.query(sqlQuery)
        res.json(books)
        // console.log(books);
    } catch (err) {
        res.json(err)
    }
})



// ADD NEW BOOK 

app.post("/add-book", async (req, res) => {
    try {
        const {book_title, urthor, genre, year_published } = req.body
        let sqlQuery = `INSERT INTO Book(book_title, urthor, genre, year_published, created_on)
        VALUES(?,?,?,?,now())`
        const new_book = [book_title, urthor, genre, year_published]
        await db.query(sqlQuery, new_book)
        res.sendStatus(201)

    }
    catch (err) {
        res.json(err)
    }

}) //http://127.0.0.1:1000/add-book


app.get("/delete-book/:bookID", (req,res)=>{
const bookid = req.params.bookID
const delquery = `DELETE FROM book 
WHERE bookID = ? `
try {
    db.query(delquery, bookid)
} catch (err) {
    console.log(err);
}


})



app.listen(PORT, ()=>{
    console.log("server running");
})