import AddCategoryForm from '../components/AddCategoryForm';

export interface Category {
    name: string,
    category: string
}

const AddCategory: React.FC = () => {

    const postCategory = (category: Category) => {
        fetch("http://localhost:8080/categories", {
            method: "POST",
            body: JSON.stringify(category),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };

    return(
        <>
            <h1>Lisa kategooria:</h1>
            <AddCategoryForm postCategoryFn={postCategory}/>
        </>
    );
}

export default AddCategory;