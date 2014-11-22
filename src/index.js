/**
 * Module dependencies.
 */

var exec = require('');

/**
 * Expose `cmd()`.
 */

module.exports = cmd;

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
}


/**
 * `cmd.doc()`
 */

cmd.doc = function() {
  console.log('sorry, not implemented yet');
}
/**
 * `cmd.fmt()`
 */

cmd.fmt = function() {
  console.log('sorry, not implemented yet');
}

/**
 * `cmd.init()`
 */

cmd.init = function() {
  console.log('sorry, not implemented yet');
}

/**
 * `cmd.lint()`
 */

cmd.lint = function() {
  console.log('sorry, not implemented yet');
}

/**
 * `cmd.list()`
 */

cmd.list = function() {
  console.log('sorry, not implemented yet');
}

/**
 * `cmd.test()`
 */

cmd.test = function() {
  console.log('sorry, not implemented yet');
}

/**
 * `cmd.version()`
 */

cmd.version = function() {
  console.log('sorry, not implemented yet');
}
