import { Category } from "../pages/AddCategory";

interface Props {
    category: Category
}

const CategoryComp: React.FC<Props> = ({category}) => {
    return(
        <>
        <h4>{category.name}</h4>
        <h4>{category.category}</h4>
        </>
    );
};

export default CategoryComp;