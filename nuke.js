class Nuke {
    #buffer  = [];
    #buffer2  = [];
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
            // for(let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
                if(this.#buffer.length != 9999999) {
                    this.#buffer.push(this.#nukeMaterial); 
                }
            // }
        }
    };
    
}

const nuke = new Nuke('mild');