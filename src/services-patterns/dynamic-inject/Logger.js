class Logger {

    constructor($injector) {
        this.injector = $injector;
    }

    debug(msg, useLogService) {
        useLogService ?
            this.injector.get('$log').debug(msg)
            : console.log(msg);
    }
}

export default Logger;