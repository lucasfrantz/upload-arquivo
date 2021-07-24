// server.js
const express = require('express')
    , app = express()
    , multer = require('multer')
    , path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        // error first callback
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {

        // error first callback
        cb(null, file.originalname);
    }
})


const upload = multer({ storage })

app.use(express.static('public'))

app.post('/file/upload', upload.single('file'),
    (req, res) => res.send('<h2>Upload realizado com sucesso</h2>'))

app.listen(3000, () => console.log('App na porta 3000'))