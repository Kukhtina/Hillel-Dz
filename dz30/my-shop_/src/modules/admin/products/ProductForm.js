import { Button, MenuItem } from '@mui/material';
import { Form, Formik } from 'formik';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

import MySelect from '../../../modules/common/form/MySelect';
import MyTextField from '../../../modules/common/form/MyTextField';
import React from 'react';
import useCategoriesList from '../../../modules/common/categories/hook/useCategoriesList';
import useProduct from '../../../modules/common/products/hooks/useProduct';
import useProducts from '../../../modules/common/products/hooks/useProducts';

function ProductForm() {
    const navigate = useNavigate();
    const { id } = useParams();
    const product = useProduct(id);
    const { save } = useProducts();
    const categories = useCategoriesList();

    function onSubmit(values) {
        save(values).then(() => {
            navigate('../');
        });
    }

    return (
        <Formik initialValues={product} enableReinitialize onSubmit={onSubmit}>
            <Form>
                <MyTextField
                    autoFocus
                    margin="dense"
                    name="title"
                    label="Product Name"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <MyTextField
                    autoFocus
                    margin="dense"
                    name="price"
                    label="Price"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <MyTextField
                    autoFocus
                    margin="dense"
                    name="description"
                    label="Description"
                    type="textarea"
                    fullWidth
                    variant="standard"
                />
                <MySelect name="categoryId">
                    {categories.map((item) => (
                        <MenuItem key={item.id} value={item.id}>
                            {item.title}
                        </MenuItem>
                    ))}
                </MySelect>
                <br />
                <Button type="submit" variant="contained" color="primary">
                    Save
                </Button>
                <Button
                    type="button"
                    color="error"
                    component={NavLink}
                    to="../"
                >
                    Cancel
                </Button>
            </Form>
        </Formik>
    );
}

export default ProductForm;
