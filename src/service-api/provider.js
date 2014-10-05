class Logger {

    constructor() {

        let logToConsole = false;

        this.enableConsole = function (flag) {
            logToConsole = flag;
        };

        this.$get =

            function () {
                return {
                    debug: function (msg) {
                        if (logToConsole) {
                            console.log(msg)
                        }
                    }
                }
            }
    }
}

export default Logger;