'use strict';
var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
// var os = require('os');

describe('ng6:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({ name: true })
      .on('end', done);
  });
  
  it('creates files', function (done) {
    assert.file([
      'package.json'
    ]);
    done();
  });

});
