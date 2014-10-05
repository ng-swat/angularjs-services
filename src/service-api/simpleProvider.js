class SimpleProvider {

    constructor() {

        console.log('SimpleProvider constructed');

        this.$get = function () {
            return console.log('SimpleProvider instance created')
        }
    }
}

export default SimpleProvider;
