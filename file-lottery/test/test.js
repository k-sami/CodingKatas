'use strict';

var assert = require('assert');
var sinon = require('sinon');
var path = require('path');

var fileLottery = require('../src/fileLottery.js').fileLottery;
var run = require('../src/fileLottery.js').run;

suite('fileLottery', function() {

  test ('run should print only the filename if the input is a filename', function() {
    var consoleSpy = sinon.spy(console, 'log');
    var flInit = sinon.stub(fileLottery,'init');
    var flNext = sinon.stub(fileLottery,'next');
    var flHasNext  = sinon.stub(fileLottery,'hasNext');
    flHasNext.onFirstCall().returns(true);
    flHasNext.onSecondCall().returns(false);
    flNext.returns('abc');
    run("abc");
    assert(consoleSpy.calledWith('abc'), true);
  });

});

//  callback.onCall(0).returns(1);

//  var fL = new fileLottery(directoryPath);
//  while(fL.hasNext()){
//      console.log(fL.next());

// stub.onFirstCall();
