package ee.jurask.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ee.jurask.backend.Model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
