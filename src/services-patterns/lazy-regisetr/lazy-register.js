import ProductFactory from './productFactory'

angular.module('app', [])

    .provider('productFactory', ['$provide',ProductFactory])

    .run(function($injector, productFactory) {

        productFactory.registerProduct('chair');
        let theChair = $injector.get('chair');
        console.log(theChair.getType());
    })

    .controller('main', function (chair) {
        this.chair = chair;
    });