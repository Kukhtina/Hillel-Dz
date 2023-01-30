import React from 'react';
import { createContext } from 'react';
import useCategoriesProvider from '../hook/useCategoriesProvider';

export const CategoriesContext = createContext();

function CategoriesProvider({ children }) {
    const value = useCategoriesProvider();

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
}

export default CategoriesProvider;
