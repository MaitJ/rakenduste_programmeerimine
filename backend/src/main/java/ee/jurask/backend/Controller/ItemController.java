package ee.jurask.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import ee.jurask.backend.Service.ItemService;
import ee.jurask.backend.Model.Item;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ItemController {

    @Autowired
    ItemService itemService;

    @GetMapping("/items")
    public List<Item> getItems() {
        return itemService.getItems();
    }

    @PostMapping("/items")
    public String postItem(@RequestBody Item item) {
        itemService.saveItem(item);
        return "Ese edukalt lisatud " + item.getName();
    }

    @DeleteMapping("delete-item/{id}")
    public List<Item> deleteItem(@PathVariable Long id) {
        itemService.deleteItem(id);
        return itemService.getItems();
    }

    @PostMapping("edit-item")
    public void editItem(@RequestBody Item item) {
        itemService.editItem(item);
    }

    @GetMapping("view-item/{id}")
    public Item getOneItem(@PathVariable Long id) throws Exception {
        return itemService.getOneItem(id);
    }
}
