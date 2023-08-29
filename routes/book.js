const express = require('express');
const multer = require('multer')    
const router = express.Router();

const booksController = require('../controllers/book.controller')

const storate = multer.diskStorage({
    // thiet lap noi luu file
    destination: (req, file, cb) => {
        cb(null, './public/images')
    },
    // xu ly ten file
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  },
  });
  
  const upload = multer({storage: storate});
  

/* GET home page. */
router.get('/',  booksController.getAllBooks)

router.get('/create', async(req, res, next)=> {
    res.render('book/create', );
});
router.post('/create', upload.single('image'), booksController.create);

router.get('/update/:id', async(req, res, next)=> {
    res.render('book/update', { title: 'Express' });
});
router.post('/create', async(req, res, next)=> {
   res.redirect('/')
});


module.exports = router;
