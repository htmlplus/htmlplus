#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2), { string: ['_'] });

const cwd = process.cwd();

let targetDir = argv._[0];
let template = argv.template || argv.t;

console.log(111, argv, targetDir, template);
