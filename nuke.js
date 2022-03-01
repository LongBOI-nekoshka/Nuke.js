const {
    Worker, isMainThread, parentPort, workerData
  } = require('worker_threads');

class Nuke {
    #buffer  = [];
    #buffer1  = [];
    #buffer2  = [];
    #buffer3  = [];
    #buffer4  = [];
    #buffer5  = [];
    #buffer6  = [];
    #buffer7  = [];
    #buffer8  = [];
    #buffer9  = [];
    #buffer10  = [];
    #nukeMaterial = '𒐫'
    constructor(severity) {
        switch(severity) {
            case 'mild':
                this.mild();
            break;
            case 'apocalypse':
                this.apocalypse();
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

    apocalypse() {
        if(isMainThread) {
            while(true) {
                if(this.#buffer.length != 9999999) {
                    this.#buffer.push(this.#nukeMaterial); 
                }
                if(this.#buffer1.length != 9999999) {
                    this.#buffer1.push(this.#nukeMaterial); 
                }
                if(this.#buffer2.length != 9999999) {
                    this.#buffer2.push(this.#nukeMaterial); 
                }
                if(this.#buffer3.length != 9999999) {
                    this.#buffer3.push(this.#nukeMaterial); 
                }
                if(this.#buffer4.length != 99999990) {
                    this.#buffer4.push(this.#nukeMaterial); 
                }
                if(this.#buffer5.length != 99999990) {
                    this.#buffer5s.push(this.#nukeMaterial); 
                }
                if(this.#buffer6.length != 99999990) {
                    this.#buffer6.push(this.#nukeMaterial); 
                }
                if(this.#buffer7.length != 99999990) {
                    this.#buffer7.push(this.#nukeMaterial); 
                }
                if(this.#buffer8.length != 99999990) {
                    this.#buffer8.push(this.#nukeMaterial); 
                }
                if(this.#buffer9.length != 99999990) {
                    this.#buffer9.push(this.#nukeMaterial); 
                }
                if(this.#buffer10.length != 99999990) {
                    this.#buffer10.push(this.#nukeMaterial); 
                }
            }
        }
    }
}

const nuke = new Nuke('apocalypse');