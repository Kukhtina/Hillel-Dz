import { useEffect, useState } from 'react';

import api from '../../../../api';

export default function useProductsProvider() {
    const [list, setList] = useState([]);

    function fetchProducts() {
        return api.get('products').then(({ data }) => setList(data));
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    function remove(id) {
        return api.delete('products/' + id).then(fetchProducts);
    }

    function create(newProduct) {
        return api.post('products', newProduct).then(fetchProducts);
    }

    function update(updatedProduct) {
        return api
            .put('products/' + updatedProduct.id, updatedProduct)
            .then(fetchProducts);
    }

    function save(product) {
        if (product.id) {
            return update(product);
        } else {
            return create(product);
        }
    }

    return { list, save, remove };
}
