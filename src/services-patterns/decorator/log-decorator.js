function logDecorator($delegate) {

    $delegate.debug = function (msg) {
        let time = new Date().getTime();
        console.log(time + " : " + msg);
    };

    return $delegate
}

export default logDecorator;