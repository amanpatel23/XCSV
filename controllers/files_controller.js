const CSV = require('../models/csv');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

module.exports.upload = async function(request, response) {

    const file = request.file;
    if (!file) {
        return response.status(400).send('Upload CSVs Only!');
    }

    try {
        const csv = await CSV.create({
            filename: file.originalname,
            filepath: '/uploads/' + file.filename
        })
        await csv.save();

        return response.redirect('back');
    }
    catch (error) {
        console.log('error --> files_controller -> upload ', error);
        return response.redirect('back');
    }
}

module.exports.delete = async function(request, response) {
    const fileId = request.query.id;
    try {
        const file = await CSV.findById(fileId);
        let filepath = file.filepath;
        filepath = path.join(__dirname, '..', filepath);
        fs.unlinkSync(filepath);
        await CSV.deleteOne({_id: fileId});

        response.redirect('back');
    }
    catch(error) {
        console.log('error --> home_controller -> delete ', error);
    }
}

module.exports.show = async function(request, response) {
    const fileName = request.query.fileName;
    const fileId = request.query.id;
    const currPage = parseInt(request.query.currPage);
    const noOfRows = 100;
    const data = [];
    try {
        const file = await CSV.findById(fileId);
        let filepath = file.filepath;
        filepath = path.join(__dirname, '..', filepath);
        let rowIndex = 0;
        const endIndex = currPage * noOfRows;
        const stIndex = endIndex - noOfRows;
        
        fs.createReadStream(filepath)
        .pipe(csv())
        .on('data', (row) => {
            if (rowIndex >= stIndex && rowIndex < endIndex) {
                data.push(row);
            }
            rowIndex++;
        })
        .on('end', () => {
            const maxPage = Math.ceil(rowIndex / noOfRows);
            const pages = [];
            for (let i = Math.max(1, currPage - 3); i <= currPage; i++) pages.push(i);
            for (let i = currPage + 1; i <= Math.min(currPage + 3, maxPage); i++) pages.push(i);
            if (pages.length < 7) {
                if (pages[0] == 1) {
                    while (pages.length != 7 && pages[pages.length - 1] < maxPage) {
                        pages.push(pages[pages.length - 1] + 1);
                    }
                } else {
                    while (pages.length != 7 && pages[0] != 1) {
                        pages.unshift(pages[0] - 1);
                    }
                }
            }
            // console.log(data);
            // response.redirect('back');
            response.render('fileview', {title: 'FileView', fileName, data, currPage, maxPage, pages, id: fileId})
        });
    }
    catch(error) {
        console.log('error --> home_controller -> show ', error);
    }
}