#!/usr/bin/env node

var compost = require("./index");

// {0: true, 2: true}
console.log(compost.decompose(5));

// 5
console.log(compost.compose({0: true, 2: true}));
