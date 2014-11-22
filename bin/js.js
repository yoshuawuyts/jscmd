/**
 * Module dependencies.
 */

var cli = require('minimist');
var path = require('path');
var fs = require('fs');
var js = require('..');

/**
 * Process arguments.
 */

help();
//
// var args = process.argv.slice(1);
// if (!args.length || 'h' == args[0]) {
//   help();
//   process.exit(0);
// }

/**
 * js().
 */

function js() {

}


function help(code) {
  var rs = fs.createReadStream(__dirname + '/usage.txt');
  rs.pipe(process.stdout);
  if (code !== undefined) {
    rs.on('end', function () { process.exit(code) });
  }
}
