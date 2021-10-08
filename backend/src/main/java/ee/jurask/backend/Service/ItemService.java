package ee.jurask.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ee.jurask.backend.repository.ItemRepository;
import ee.jurask.backend.Model.Item;
import java.util.List;

@Service
public class ItemService {

    @Autowired
    ItemRepository itemRepository;

    public List<Item> getItems() {
        return this.itemRepository.findAll();
    }

    public void saveItem(Item item) {
        this.itemRepository.save(item);
    }

    public void deleteItem(Long id) {
        this.itemRepository.deleteById(id);
    }

    public void editItem(Item item) {
        this.itemRepository.save(item);
    }

    public Item getOneItem(Long id) throws Exception {
        if (itemRepository.findById(id).isPresent()) {
            return itemRepository.findById(id).get();
        }
        throw new Exception();
    }
}
