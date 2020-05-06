#!/usr/bin/env node

import program from 'commander';
import genDiff from '../index.js';

program.description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format [type]', 'output format')
  .action((firstConfig, secondConfig) => console.log(genDiff(firstConfig, secondConfig)));

program.parse(process.argv);