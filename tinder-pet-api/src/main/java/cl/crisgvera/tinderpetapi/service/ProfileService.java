package cl.crisgvera.tinderpetapi.service;

import cl.crisgvera.tinderpetapi.model.Profile;
import cl.crisgvera.tinderpetapi.repository.ProfileRepository;
import cl.crisgvera.tinderpetapi.service.util.CrudMethods;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.stream.Collectors;

import static cl.crisgvera.tinderpetapi.constant.CommonConstant.*;

@Service
public class ProfileService implements CrudMethods<Profile, Long> {

    private final ProfileRepository profileRepository;

    public ProfileService(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    @Override
    public Profile findById(Long id) {
        return profileRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(ENTITY_WITH_ID + id + WAS_NOT_FOUND));
    }

    @Override
    public Collection<Profile> findAll() {
        return profileRepository.findAll();
    }

    @Override
    public Profile save(Profile profile) {
        checkExistence(profile.getId(), false);
        return profileRepository.save(profile);
    }

    @Override
    public Profile update(Profile profile) {
        checkExistence(profile.getId(), true);
        return profileRepository.save(profile);
    }

    @Override
    public void deleteById(Long id) {
        checkExistence(id, true);
        profileRepository.deleteById(id);
    }

    public Collection<Profile> getAllByBreedId(Long id) {
        return findAll().stream()
                .filter(profile -> profile.getBreed().getId().equals(id))
                .collect(Collectors.toList());
    }

    private void checkExistence(Long id, boolean existenceNecessity) {
        String NECESSITY_MESSAGE = existenceNecessity ? " does not exist." : " already exist.";
        boolean exist = profileRepository.existsById(id);

        assert exist == existenceNecessity : ENTITY_WITH_ID + id + NECESSITY_MESSAGE;
    }
}
