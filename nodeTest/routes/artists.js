var express = require( 'express' );
var router  = express.Router();
var Artists = require( '../lib/artists' );
var debug   = require( 'debug' )( 'nodeTest:artists' );
var _       = require( 'lodash' );

/*  GET list artist */
router.get( '/', function( request, response ) {
    Artists.find( {}, function ( error, artists ) { 
        if ( error ) {
            response.send( error );
        }
        response.render( 'artists/index', { artists: artists } );
    } );
} );

router.get( '/add', function ( request, response ) {
    response.render( 'artists/add' );
} );

router.get( '/:artist_id', function ( request, response ) {
    Artists.findById( request.params.artist_id, function ( error, artist ) {
        response.render( 'artists/detail', { artist: artist } );
    } );
} );

router.post( '/', function ( request, response ) {
    debug( 'Creating new artist' );
    var name    = request.body.name;

    if ( !_.isUndefined( name ) || name !== '' ) {
        var artist  = new Artists( { name: name } );
        artist.save( function ( error, artist ) {
            if ( error ) {
                return response.send ( error );
            }
            response.send ( artist.name + ' was saved' );
        } );
    } else {
        response.send ( 'Please specify artist name' );
    }
} );

module.exports  = router;