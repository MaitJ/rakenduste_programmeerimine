import React, {useRef} from "react";
import {ItemType} from '../components/Item'

interface Props {
    onAddItem: (item: ItemType) => void
}
const AddItem: React.FC<Props> = ({onAddItem}) => {

    const nameInputRef = useRef<HTMLInputElement>(null);
    const priceInputRef = useRef<HTMLInputElement>(null);
    const categoryInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log("form enter");
        const name_value = nameInputRef.current!.value;
        const price_value = priceInputRef.current!.value;
        const category_value = categoryInputRef.current!.value;
        const item: ItemType = {
            name: name_value,
            price: price_value,
            category: category_value
        }
        onAddItem(item);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Eseme nimi</label><br/>
            <input type="text" placeholder="Nimi" required ref={nameInputRef}></input><br/>
            <label>Eseme hind</label><br/>
            <input type="number" required ref={priceInputRef}></input><br/>
            <label>Eseme kategooria</label><br/>
            <input type="text" required ref={categoryInputRef}></input><br/>
            <button>Sisesta uus ese</button>
        </form>
    );
};

export default AddItem;