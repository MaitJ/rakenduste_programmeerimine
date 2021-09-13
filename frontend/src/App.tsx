import React from 'react';
import Item, {ItemType} from './Item';

const testItems: Array<ItemType> = [
  {

    name: "Banana",
    price: 5,
    category: "Fruit"
  },
  {
    name: "Apple",
    price: 2,
    category: "Fruit"
  },
  {
    name: "Strawberry",
    price: 3.5,
    category: "Fruit"
  }
]; 

const App: React.FC = () => {
  return(
    <section>
      <h1>Rakenduste progemine</h1>
      {testItems.map((item) => {
        return <Item item={item}/>
      })}
    </section>
  );
}

export default App;
