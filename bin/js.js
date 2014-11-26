/**
 * Module dependencies.
 */

var minimist = require('minimist');
var path = require('path');
var fs = require('fs');
var js = require('..');

var cmd = js();

/**
 * Parse cli args.
 */

var args = process.argv.slice(2);
var argv = minimist(args, {
  alias: {
    h: 'help',
    v: 'version'
  },
  boolean: ['h'],
  string: ['_']
});

/**
 * Flags.
 */

if (argv._h || argv._help) return usage();
if (argv.v || argv.version) return cmd.version();

/**
 * Commands.
 */

var args = concat(argv._.splice(1));

switch(argv._[0]) {
  case 'clean':
    return cmd.clean(args);
  case 'doc':
    return cmd.doc(args);
  case 'fmt':
    return cmd.fmt(args);
  case 'init':
    return cmd.init(args);
  case 'lint':
    return cmd.lint(args);
  case 'list':
    return cmd.list(args);
  case 'test':
    return cmd.test(args);
  default:
    return usage();
}

/**
 * Print usage.
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

/**
 * Concat arguments to a string.
 *
 * @param {Mixed}
 * @return {String[]}
 * @api private
 */

function concat() {
  var arr = ' ';

  for(i = 0, j = arguments.length; j > i; i++) {
    arr += (arguments[i] + ' ');
  }

  console.log(arr)
  return arr;
}
