import React from 'react'

export interface ItemType {
    name: string,
    price: number,
    category: string
}

interface Props {
    item: ItemType
}

const Item: React.FC<Props> = ({item}) => {
    return(
        <article>
            <h5>name: {item.name}</h5>
            <h6>price: {item.price}</h6>
            <h6>category: {item.category}</h6>
        </article>
    );
}

export default Item;