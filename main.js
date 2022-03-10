const {app} = require('electron');
const path = require('path');
const { Worker } = require('worker_threads');

// new Worker('./worker.js');
new Worker(path.join(app.getAppPath(), 'app.asar', 'worker.js'));
