import { useEffect, useState } from 'react';

import api from '../../../../api';

export default function useCategoriesProvider() {
    const [list, setList] = useState([]);

    function fetchCategories() {
        return api.get('categories').then(({ data }) => setList(data));
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    function remove(id) {
        return api.delete('categories/' + id).then(fetchCategories);
    }

    function create(newCategory) {
        return api.post('categories', newCategory).then(fetchCategories);
    }

    function update(updatedCategory) {
        return api
            .put('categories/' + updatedCategory.id)
            .then(fetchCategories);
    }

    function save(category) {
        if (category.id) {
            return update(category);
        } else {
            return create(category);
        }
    }

    return { list, save, remove };
}
