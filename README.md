# uuidjs #

These libuuid bindings are forked from Nikhil Marathe's [project][1]
on bitbucket.

## Installation ##

Clone this repository, then:

    cd uuidjs
    node-waf configure build

and link `build/default/uuid.node` into your `NODE_PATH`.

## Example ##

    var sys = require('sys'),
        uuid = require('uuid');

    sys.puts('generate: ' + uuid.generate());
    sys.puts('binary: ' + sys.inspect(uuid.generate('binary')));

## API ##

**generate([encoding])**
Generate a new UUID with an optional encoding.  If the encoding is
`'binary'`, return the raw, 16 byte UUID.  Otherwise, return a 40
character string in a hyphenated hexidecimal format.

[1]: http://bitbucket.org/nikhilm/uuidjs
