package cl.crisgvera.tinderpetapi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@Table(name = "RAZA")
public class Breed {

    @Id
    @GeneratedValue(generator = "BREED_SEQUENCE")
    private Long id;

    @Column(name = "NOMBRE", length = 30)
    private String name;

    @OneToMany(mappedBy = "breed", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    @EqualsAndHashCode.Exclude
    private Set<Profile> profiles = new HashSet<>();

    public void addProfile(Profile profile) {
        profiles.add(profile);
        profile.setBreed(this);
    }

    public void removeProfile(Profile profile) {
        profiles.remove(profile);
        profile.setBreed(null);
    }

}
