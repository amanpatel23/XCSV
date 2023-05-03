const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const storage = multer.diskStorage({
    destination: function(request, file, cb) {
        cb(null, path.join(__dirname, '..', '/uploads'));
    },
    filename: function(request, file, cb) {
        const fileName = file.fieldname + '-' + crypto.randomBytes(12).toString('hex');
        cb(null, fileName);
    }
})

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

const filesController = require('../controllers/files_controller');
router.post('/upload-csv', upload.single('csv'), filesController.upload);
router.get('/delete-csv', filesController.delete);
router.get('/show-csv', filesController.show);

module.exports = router;