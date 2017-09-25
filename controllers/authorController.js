var Author = require("../models/author");

//display list of all Authors
exports.author_list = function (req, res, next) {
    Author.find()
    .sort([['family_name', 'ascending']])
    .exec(function (err, list_authors) {
        if (err){ return next (err);}
        res.render("author_list", {title: 'Author List', author_list: list_authors});
    });
};

//display detail page for  specific author
exports.author_detail = function (req, res, next) {
    res.send("NOT IMPLEMENTED: Author detail " + req.params.id);
};

//display author create form on GET
exports.author_create_get = function (req, res, next) {
    res.render('author_form', {title: 'Create Author'});
};

//handle author create on post
exports.author_create_post = function (req, res) {
    //
};

//display author delete form on GET
exports.author_delete_get = function (req, res) {
    res.send("NOT IMPLEMENTED: Author delete GET");
};

// Handle Author delete on POST
exports.author_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST');
};

// Display Author update form on GET
exports.author_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update GET');
};

// Handle Author update on POST
exports.author_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
};