package ee.jurask.backend.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import org.springframework.stereotype.Component;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Component
@Entity
@ToString
public class Category {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private CategoryType category;
}

enum CategoryType {
    PREMIUM, DELUXE, BASIC
}

// Service, repository ja controller koduseks
