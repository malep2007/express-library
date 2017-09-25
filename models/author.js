var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var moment = require("moment");
var AuthorSchema = Schema({
    first_name:{type:String, required:true,max: 100},
    family_name:{type:String, required: true, max:100},
    date_of_birth:{type: Date},
    date_of_death:{type:Date}
});

//virtual for author's full name
AuthorSchema.virtual('name').get(function () {
    return this.family_name+" "+this.first_name;
});

//virtual for author's url
AuthorSchema.virtual('url').get(function(){
    return "/catalog/author/"+this._id;
});

//virtual for author date_of_birth
AuthorSchema.virtual('date_of_birth_clean').get(function () {
    return moment(this.date_of_birth).format("MMMM Do, YYYY");
});

//virtual for author date_of_death
AuthorSchema.virtual('date_of_death_clean').get(function () {
    return moment(this.date_of_death).format("MMMM Do, YYYY");
});

//export model
module.exports = mongoose.model("Author", AuthorSchema);