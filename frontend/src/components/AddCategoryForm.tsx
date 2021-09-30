import {useRef} from 'react';
import AddCategory, {Category} from '../pages/AddCategory';

interface Props {
    postCategoryFn: (category: Category) => void
}

const AddCategoryForm: React.FC<Props> = ({postCategoryFn}) => {
    const categoryTypeRef = useRef<HTMLSelectElement>(null);
    const categoryNameRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const name_value = categoryNameRef.current!.value;
        const type_value = categoryTypeRef.current!.value;

        const new_category: Category = {
            name: name_value,
            category: type_value
        };

        console.log(new_category);
        postCategoryFn(new_category);

    };

    return(
        <form onSubmit={handleSubmit}>
            <label>Sisesta kategooria nimi:</label>
            <input type="text" ref={categoryNameRef} required/>
            <label>Vali kategooria tyyp</label>
            <select ref={categoryTypeRef} required>
                <option value="0">Premium</option>
                <option value="1">Deluxe</option>
                <option value="2">Basic</option>
            </select>
            <button type="submit">Sisesta</button>
        </form>
    );
};

export default AddCategoryForm;