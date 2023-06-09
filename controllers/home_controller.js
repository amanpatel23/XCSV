const CSV = require('../models/csv');

// showing all the uploaded files on the home page
module.exports.home = async function(request, response) {
    try {
        const files = await CSV.find({}).sort({createdAt: -1});
        return response.render('home', {
            title: 'Home',
            files
        });
    }
    catch (error) {
        console.log('errro in home_controller -> home ', error);
    }
}

