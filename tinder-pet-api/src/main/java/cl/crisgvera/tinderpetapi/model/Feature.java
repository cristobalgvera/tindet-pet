package cl.crisgvera.tinderpetapi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@Table(name = "CARACTERISTICA")
public class Feature {

    @Id
    @GeneratedValue(generator = "FEATURE_SEQUENCE")
    private Long id;

    @Column(name = "NOMBRE", length = 30)
    private String name;

    @ManyToMany(mappedBy = "features")
    @JsonIgnore
    @EqualsAndHashCode.Exclude
    private Set<Profile> profiles = new HashSet<>();

    public void addProfile(Profile profile) {
        profiles.add(profile);
    }

    public void removeProfile(Profile profile) {
        profiles.remove(profile);
    }

}
