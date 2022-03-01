const {
    Worker, isMainThread, parentPort, workerData
  } = require('worker_threads');

class Nuke {
    #buffer  = [];
    #nukeMaterial = '𒐫'
    constructor(severity) {
        switch(severity) {
            case 'mild':
                this.mild();
            break;
            default:
                return 0;
        }
    }

    mild() {
        while(true) {
            if(this.#buffer.length != 9999999) {
                this.#buffer.push(this.#nukeMaterial); 
            }
        }
    };
}

const nuke = new Nuke('mild');