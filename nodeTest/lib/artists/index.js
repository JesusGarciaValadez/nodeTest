var mongoose    = require( 'mongoose' );
var Schema      = mongoose.Schema;
mongoose.connect( 'mongodb://localhost/nodeTest' );

var artistsSchema   = new Schema( {
    name: String,
    slug: String,
    album: [ {
        title: String,
        yeart: Number, 
        image: String
    } ],
    shows: [ {
        city: String
    } ]
} );

var Artist      = mongoose.model( 'Artist', artistsSchema );

module.exports  = Artist;