import Product from './product';

class ProductFactory {

    constructor(providerSerivce) {

        let provider = providerSerivce;

        this.$get = function () {
            return {
                registerProduct : function (type) {
                    provider.value(type, new Product(type));
                }
            }
        }
    }
}

export default ProductFactory;