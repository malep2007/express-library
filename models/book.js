var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BookSchema = Schema({
    title:{type:String, require: true},
    author:{type: Schema.ObjectId, ref: "Author", required: true},
    summary:{type: String, required: true},
    genre:[{type: Schema.ObjectId, ref: "Genre"}]
});

//virtual book's url
BookSchema.virtual('url').get(function () {
    return "/catalog/book/"+this._id;
});

//Export model
module.exports = mongoose.model("Book", BookSchema);