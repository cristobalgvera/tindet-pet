package cl.crisgvera.tinderpetapi.service;

import cl.crisgvera.tinderpetapi.model.Feature;
import cl.crisgvera.tinderpetapi.repository.FeatureRepository;
import cl.crisgvera.tinderpetapi.service.util.CrudMethods;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.Collection;

import static cl.crisgvera.tinderpetapi.constant.CommonConstant.*;

@Service
public class FeatureService implements CrudMethods<Feature, Long> {

    private final FeatureRepository featureRepository;

    public FeatureService(FeatureRepository featureRepository) {
        this.featureRepository = featureRepository;
    }

    @Override
    public Feature findById(Long id) {
        return featureRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(ENTITY_WITH_ID + id + WAS_NOT_FOUND));
    }

    @Override
    public Collection<Feature> findAll() {
        return featureRepository.findAll();
    }

    @Override
    public Feature save(Feature feature) {
        checkExistence(feature.getId(), false);
        return featureRepository.save(feature);
    }

    @Override
    public Feature update(Feature feature) {
        checkExistence(feature.getId(), true);
        return featureRepository.save(feature);
    }

    @Override
    public void deleteById(Long id) {
        checkExistence(id, true);
        featureRepository.deleteById(id);
    }

    private void checkExistence(Long id, boolean existenceNecessity) {
        String NECESSITY_MESSAGE = existenceNecessity ? " does not exist." : " already exist.";
        boolean exist = featureRepository.existsById(id);

        assert exist == existenceNecessity : ENTITY_WITH_ID + id + NECESSITY_MESSAGE;
    }
}
