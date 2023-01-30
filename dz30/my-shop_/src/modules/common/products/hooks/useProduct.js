import {useEffect, useState} from 'react';

import api from '../../../../api';

const EMPTY_PRODUCT = {
    title: '',
    price: '',
    description: '',
    categoryId: 0,
};
export default function useProduct(id) {
    const [product, setProduct] = useState(EMPTY_PRODUCT);

    function fetchProduct() {
        return api.get('products/' + id);
    }

    useEffect(() => {
        if (isNaN(id)) {
            setProduct(EMPTY_PRODUCT)
        } else {
            fetchProduct()
                .then(({data}) => setProduct(data))
                .catch(() => setProduct(EMPTY_PRODUCT));
        }
    }, [id]);

    return product;
}
