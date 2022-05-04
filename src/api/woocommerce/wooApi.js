import wooClient from './wooClient';

const wooApi = {
    getOrders: (params) => {
        const url = '/orders';

        return wooClient.get(url, {
            params,
        });
    },
    getCustomer: (userID) => {
        const url = '/customers/' + userID;
        
        return wooClient.get(url);
    },
    getWishList: (userID) => {
        const url = '/wishlist/get_by_user/' + userID;

        return wooClient.get(url);
    },
    getWishListProducts: (shareKey) => {
        const url = '/wishlist/' + shareKey + '/get_products';

        return wooClient.get(url);
    },
    updateCustomer: (userID, data) => {
        const url = '/customers/' + userID;

        return wooClient.put(url, data);
    }
};

export default wooApi;