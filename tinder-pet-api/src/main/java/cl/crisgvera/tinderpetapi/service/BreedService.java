package cl.crisgvera.tinderpetapi.service;

import cl.crisgvera.tinderpetapi.model.Breed;
import cl.crisgvera.tinderpetapi.repository.BreedRepository;
import cl.crisgvera.tinderpetapi.service.util.CrudMethods;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.Collection;

import static cl.crisgvera.tinderpetapi.constant.CommonConstant.*;

@Service
public class BreedService implements CrudMethods<Breed, Long> {

    private final BreedRepository breedRepository;

    public BreedService(BreedRepository breedRepository) {
        this.breedRepository = breedRepository;
    }

    @Override
    public Breed findById(Long id) {
        return breedRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(ENTITY_WITH_ID + id + WAS_NOT_FOUND));
    }

    @Override
    public Collection<Breed> findAll() {
        return breedRepository.findAll();
    }

    @Override
    public Breed save(Breed breed) {
        checkExistence(breed.getId(), false);
        return breedRepository.save(breed);
    }

    @Override
    public Breed update(Breed breed) {
        checkExistence(breed.getId(), true);
        return breedRepository.save(breed);
    }

    @Override
    public void deleteById(Long id) {
        checkExistence(id, true);
        breedRepository.deleteById(id);
    }

    private void checkExistence(Long id, boolean existenceNecessity) {
        String NECESSITY_MESSAGE = existenceNecessity ? " does not exist." : " already exist.";
        boolean exist = breedRepository.existsById(id);

        assert exist == existenceNecessity : ENTITY_WITH_ID + id + NECESSITY_MESSAGE;
    }

}
