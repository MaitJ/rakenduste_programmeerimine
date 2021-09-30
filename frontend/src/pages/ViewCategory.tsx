import {Category} from '../pages/AddCategory';
import {useCallback, useEffect, useState} from 'react';
import {api} from '../components/Rest';
import CategoryComp from '../components/CategoryComp';

const ViewCategory: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    const fetchCategories = useCallback(async () => {
        const data = await api<Category[]>("http://localhost:8080/categories");
        setCategories(data);
        console.log(data);
    }, [])

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);
    

    return(
        <>
            <h1>Category view</h1>
            <section className="category-container">
                {
                    categories.map((category, index) => {
                        return <CategoryComp category={category} key={index}/>
                    })
                }
            </section>
        </>
    );
}

export default ViewCategory;