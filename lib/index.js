/**
 * Module dependencies.
 */

var eslint = './node_modules/.bin/eslint';
var exec = require('child_process').exec;
var assert = require('assert');

/**
 * Expose `cmd()`.
 */

module.exports = Cmd;

/**
 * Prototype
 */

var cmd = Cmd.prototype;

/**
 * Run a given tool with arguments.
 *
 * @param {String} name
 * @param {String[]?} args
 */

function Cmd(name, args) {
  if (!(this instanceof Cmd)) return new Cmd(name, args);
  return this;
}

/**
 * `cmd.clean()`
 */

cmd.clean = function() {
  console.log('sorry, not implemented yet');
};

/**
 * `cmd.doc()`
 */

cmd.doc = function() {
  console.log('sorry, not implemented yet');
};

/**
 * `cmd.fmt()`
 */

cmd.fmt = function() {
  console.log('sorry, not implemented yet');
};

/**
 * `cmd.init()`
 */

cmd.init = function() {
  console.log('sorry, not implemented yet');
};

/**
 * `cmd.lint()`
 */

cmd.lint = function(args) {
  args = args || '';
  console.log(eslint + args)
  exec(eslint + args, function(err, res) {
    assert.ifError(err);
    console.log(res);
  });
};

/**
 * `cmd.list()`
 */

cmd.list = function() {
  console.log('sorry, not implemented yet');
};

/**
 * `cmd.test()`
 */

cmd.test = function() {
  console.log('sorry, not implemented yet');
};

/**
 * `cmd.version()`
 */

cmd.version = function() {
  exec('npm version', function(err, res) {
    assert.ifError(err);
    console.log(res);
  });
};
