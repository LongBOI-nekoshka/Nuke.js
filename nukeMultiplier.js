const {
    Worker, isMainThread, parentPort, workerData
  } = require('worker_threads');

if(isMainThread) {
    while(true) {
        const worker = new Worker('./nuke.js');
    }
}