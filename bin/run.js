#!/usr/bin/env node

var argv = require('optimist').argv;
var reader = require('../SVGReader');
var offset = require('../offset');
var Vec2 = require('vec2');
var SVGMill = require('../svgmill');

if (argv.i) {
  var svg = "";
  process.stdin.on('data', function(d) {
    svg += d;
  });

  process.stdin.on('end', function() {
    console.log(SVGMill.svgToGCode(svg, argv.scale, argv.z));
  });

  process.stdin.resume();
}