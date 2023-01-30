import useCategoriesList from './useCategoriesList';

export default function useCategory(id) {
    const list = useCategoriesList();

    const category = list.find((item) => item.id === id);

    return category;
}
