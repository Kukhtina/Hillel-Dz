import { CategoriesContext } from '../providers/CategoriesProvider';
import { useContext } from 'react';

export default function useCategories() {
    const context = useContext(CategoriesContext);

    if (context === null) {
        throw new Error(
            'useCategories should be used only inside CategoriesProvider'
        );
    }

    return context;
}
