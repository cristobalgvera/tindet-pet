package cl.crisgvera.tinderpetapi.controller;

import cl.crisgvera.tinderpetapi.model.Feature;
import cl.crisgvera.tinderpetapi.service.FeatureService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@CrossOrigin
@RequestMapping(value = "/features")
public class FeatureController {

    private final FeatureService featureService;

    public FeatureController(FeatureService featureService) {
        this.featureService = featureService;
    }

    @GetMapping
    public ResponseEntity<Collection<Feature>> getAll() {
        return new ResponseEntity<>(featureService.findAll(), HttpStatus.OK);
    }

}
