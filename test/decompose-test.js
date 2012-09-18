var compost = require("../index"),
    vows = require("vows"),
    assert = require("assert");

var data = require("./data.json");

var tests = data.reduce(function(i, v) {
  i[v[0]] = {
    topic: function() { return compost.decompose(v[0]); },
  };

  i[v[0]]["returns " + JSON.stringify(v[1])] = function(res) {
    assert.equal(JSON.stringify(res), JSON.stringify(v[1]));
  };

  return i;
}, {});

vows.describe("decompose").addBatch(tests).export(module);
