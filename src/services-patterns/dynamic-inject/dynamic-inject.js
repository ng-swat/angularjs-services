import Logger from './Logger';

angular.module('app', [])

    .service('logger', ['$injector', Logger])

    .run(function (logger) {
        logger.debug('something to debug', true)
    });