'use strict';

import { spawn } from 'child_process';
import * as npm from 'npm';


// console.log(npm.load());
// console.log(npm.commands.view(['typescript', 'versions'], console.log));

// var npmconf = require('../lib/config/core.js')
// var configDefs = npmconf.defs
// var shorthands = configDefs.shorthands
// var conf = nopt(types, shorthands)



console.log(JSON.stringify(npm.config.get('proxy')));
// console.log(npm.commands.info);
