var uuid = require( "./uuid" )
  , sys = require( "sys" )

for( var i = 0; i < 10; i++ )
    sys.debug( uuid.generate() );

