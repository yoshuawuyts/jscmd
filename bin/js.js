/**
 * Module dependencies.
 */

var minimist = require('minimist');
var path = require('path');
var fs = require('fs');
var js = require('..');

/**
 * Process arguments.
 */

var args = process.argv.slice(2);
var argv = minimist(args, {
    alias: {
      c: 'clean',
      d: ['doc', 'docs'],
      h: 'help',
      l: 'lint',
      ls: 'list',
      t: 'test',
      v: 'version'
    },
    boolean: [ 'h' ],
    string: [ '_' ]
});

/**
 * Print usage.
 */

if (argv.h || argv.help) return usage();

/**
 * `Usage`.
 * 
 * @param {Number} code
 * @api private
 */

function usage(code) {
  var rs = fs.createReadStream(path.join(__dirname, 'usage.txt'));
  rs.pipe(process.stdout);

  if (code) rs.on('end', function() { 
    process.exit(code);
  });
}
