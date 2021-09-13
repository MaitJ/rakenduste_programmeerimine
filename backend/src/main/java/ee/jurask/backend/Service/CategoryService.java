package ee.jurask.backend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ee.jurask.backend.repository.CategoryRepository;
import ee.jurask.backend.Model.Category;

@Service
public class CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    public List<Category> getCategories() {
        return this.categoryRepository.findAll();
    }

    public void saveCategory(Category category) {
        this.categoryRepository.save(category);
    }
}
