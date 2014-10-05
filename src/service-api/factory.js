function loggerFactory() {

    return {
        debug: function (msg) {
            console.log(msg);
        }
    }
}

export default loggerFactory;