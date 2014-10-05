class Logger {

    constructor() {
        this.enableConsole = true;
    }

    debug(msg) {
        if (this.enableConsole) {
            console.log(msg)
        }
    }
}

export default Logger;