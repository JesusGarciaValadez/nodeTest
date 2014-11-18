function hello ( req, res, next ) {
    res.setHeader( 'Content-Type', 'text/plain' );
    res.end( 'Hello World #backendpro' );
}

var connect = require( "connect" );
var app     = connect();

app
    .use( hello )
    .listen( 3000 );