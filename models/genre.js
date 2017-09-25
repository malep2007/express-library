var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var GenreSchema = Schema({
    name: {type: String, required: true, min:3, max:100}
});

//virtual url for schema
GenreSchema.virtual('url').get(function () {
    // return "/catalog/genre/"+this._id;
    return this._id;
});


// export the model
module.exports = mongoose.model("Genre", GenreSchema);