import { ProductsContext } from '../providers/ProductsProvider';
import { useContext } from 'react';

export default function useProducts() {
    const context = useContext(ProductsContext);

    if (context === null) {
        throw new Error(
            'useProducts should be used only inside ProductsProvider'
        );
    }

    return context;
}
