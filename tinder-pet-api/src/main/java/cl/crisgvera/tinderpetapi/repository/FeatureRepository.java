package cl.crisgvera.tinderpetapi.repository;

import cl.crisgvera.tinderpetapi.model.Feature;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeatureRepository extends JpaRepository<Feature, Long> {
}
