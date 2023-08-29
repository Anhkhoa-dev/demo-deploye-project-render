const Books = require('../models/books.model')


const booksController = {
    // Get all books
        getAllBooks: async(req, res)=>{
            res.render('book/index', { title: 'All book', books: await Books.find()}); 
        },

    //Get book by name  


    //create new book
        create:  async(req,res) => {
            let file = req.file
            try{
                //tạo 1 user mới trong database
                const newBook= new Books({
                    title: req.body.title,
                    price: req.body.price,
                    image: file.filename
                })
                await newBook.save()
                return res.redirect('/book');
            }catch(err){
                res.status(500).json(err)
            }
        }

    //update book



    //delete book

}

module.exports = booksController