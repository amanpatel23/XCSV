const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

// setting up multer for uploading csv files
const storage = multer.diskStorage({
    destination: function(request, file, cb) {
        cb(null, path.join(__dirname, '..', '/uploads'));
    },
    filename: function(request, file, cb) {
        const fileName = file.fieldname + '-' + crypto.randomBytes(12).toString('hex');
        cb(null, fileName);
    }
})

// checker for uploading only csv files
const fileFilter = function(request, file, cb) {
    if (file.mimetype === "text/csv" ||
        file.mimetype === "application/vnd.ms-excel") {
            cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    // limits: {
    //     fileSize: 20 * 1024 * 1024
    // }
});

// getting the files controller for performing actions on different routes
const filesController = require('../controllers/files_controller');
// for uploading csv file
router.post('/upload-csv', upload.single('csv'), filesController.upload);
// for deleting csv file
router.get('/delete-csv', filesController.delete);
// for showing csv file
router.get('/show-csv', filesController.show);

module.exports = router;