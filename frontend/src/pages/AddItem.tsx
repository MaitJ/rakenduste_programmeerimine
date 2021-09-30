import AddItemForm from '../pages/AddItemForm';
import {ItemType} from '../components/Item';

const AddItem: React.FC = () => {
    const itemSubmitHandler = (item: ItemType) => {
        fetch("http://localhost:8080/items", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(item);
    }
    return(
        <>
        <h1>Esemete lisamine</h1>
        <AddItemForm onAddItem={itemSubmitHandler}/>
        </>
    );
}

export default AddItem;