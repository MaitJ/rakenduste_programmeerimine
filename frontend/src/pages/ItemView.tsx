import { useCallback, useEffect, useState } from 'react';
import Item, {ItemType} from '../components/Item';
import {api} from '../components/Rest';

const testItems: Array<ItemType> = [
  {
    name: "Banana",
    price: "5.55",
    category: "Fruit"
  },
  {
    name: "Apple",
    price: "6",
    category: "Fruit"
  },
  {
    name: "Strawberry",
    price: "3.5",
    category: "Fruit"
  }
]; 


const ItemViews: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [items, setItems] = useState<ItemType[]>([]);

  const fetchItems = useCallback(async () => {
    const data = await api<ItemType[]>("http://localhost:8080/items");
    setItems(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems])

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  return(
      <section className="content-container">
          <h1>Items</h1>
          {items.map((item, index) => <Item item={item} key={index}/>)}
      </section>
  );
}

export default ItemViews;