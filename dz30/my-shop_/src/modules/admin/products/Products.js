import CategoriesProvider from '../../../modules/common/categories/providers/CategoriesProvider';
import {Outlet} from 'react-router-dom';
import {Paper} from '@mui/material';
import ProductsProvider from '../../../modules/common/products/providers/ProductsProvider';
import React from 'react';

function Products() {
    return (
        <CategoriesProvider>
            <ProductsProvider>
                <Paper
                    sx={{
                        p: 4,
                        flex: 1
                    }}
                >
                    <Outlet/>
                </Paper>
            </ProductsProvider>
        </CategoriesProvider>
    );
}

export default Products;
