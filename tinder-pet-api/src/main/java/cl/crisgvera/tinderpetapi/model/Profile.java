package cl.crisgvera.tinderpetapi.model;

import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@Table(name = "PERFIL")
public class Profile {

    @Id
    @GeneratedValue(generator = "PROFILE_SEQUENCE")
    private Long id;

    @Column(name = "NOMBRE", length = 30)
    private String name;

    @Column(name = "GENERO", length = 15)
    private String gender;

    @Column(name = "EDAD", precision = 3)
    private int age;

    @Column(name = "FRASE", length = 100)
    private String phrase;

    @Column(name = "URL_IMAGEN", length = 200)
    private String imageUri;

    @ManyToOne(optional = false)
    @JoinColumn(name = "RAZA_ID")
    private Breed breed;

    @ManyToMany(cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    @JoinTable(
            name = "PERFIL_HAS_CARACTERISTICA",
            joinColumns = @JoinColumn(name = "PERFIL_ID"),
            inverseJoinColumns = @JoinColumn(name = "CARACTERISTICA_ID")
    )
    private Set<Feature> features = new HashSet<>();

    public void addFeature(Feature feature) {
        features.add(feature);
        feature.addProfile(this);
    }

    public void removeFeature(Feature feature) {
        features.remove(feature);
        feature.removeProfile(this);
    }

}
