import React from 'react';
import useCategory from '../hook/useCategory';

function CategoryName({ id }) {
    const category = useCategory(id);

    return category ? category.title : 'unknown category';
}

export default CategoryName;
