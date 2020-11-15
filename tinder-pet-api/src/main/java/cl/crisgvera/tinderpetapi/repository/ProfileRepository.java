package cl.crisgvera.tinderpetapi.repository;

import cl.crisgvera.tinderpetapi.model.Feature;
import cl.crisgvera.tinderpetapi.model.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface ProfileRepository extends JpaRepository<Profile, Long> {
}
