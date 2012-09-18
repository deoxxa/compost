var compost = require("../index"),
    vows = require("vows"),
    assert = require("assert");

var data = require("./data.json");

var tests = data.reduce(function(i, v) {
  i[JSON.stringify(v[1])] = {
    topic: function() { return compost.compose(v[1]); },
  };

  i[JSON.stringify(v[1])]["returns " + v[0]] = function(res) {
    assert.equal(res, v[0]);
  };

  return i;
}, {});

vows.describe("compose").addBatch(tests).export(module);
