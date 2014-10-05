import SimpleProvider from './simpleProvider';

angular.module('app', [])

    .provider('simpleProvider', SimpleProvider)

    .config(function (simpleProviderProvider) {
        console.log(simpleProviderProvider)
    })

    .run(function (simpleProvider) {
        console.log(simpleProvider)
    });