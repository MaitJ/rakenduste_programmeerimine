import Item, {ItemType} from '../components/Item';

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

const ItemViews: React.FC = () => {
    return(
        <section>
            <h1>Items</h1>
            {testItems.map((item) => <Item item={item}/>)}
        </section>
    );
}

export default ItemViews;