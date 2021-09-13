package ee.jurask.backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ee.jurask.backend.Model.Category;
import ee.jurask.backend.Service.CategoryService;

@RestController
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping("/categories")
    public List<Category> getCategories() {
        return this.categoryService.getCategories();
    }

    @PostMapping("/categories")
    public String postItem(@RequestBody Category category) {
        this.categoryService.saveCategory(category);
        return "Kategooria edukalt lisatud, kategooria: " + category.toString();
    }
}
