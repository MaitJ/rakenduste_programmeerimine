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
}
