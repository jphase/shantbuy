/*
 *	Server
 */

	var restify = require( 'restify' ),
	fs = require( 'fs' );

	var server = restify.createServer({
		name: 'shantbuy',
	});

	server.listen( 8080 );

	// MongoDB
	var MongoClient = require( 'mongodb' ).MongoClient;
	var assert = require( 'assert' );
	var MongoUrl = 'mongodb://localhost:27017/test';
	MongoClient.connect( MongoUrl, function( err, db ) {
		assert.equal( null, err );
		console.log( "Connected correctly to server." );
		db.close();
	});


/*
 *	Routing
 */

	// Process all URL end points as request parameters
	server.get(
		'/foo/:id',
		function( req, res, next ) {
			console.log( 'Authenticate' );
			res.send( JSON.stringify( true ) );
			return next();
		}
	);