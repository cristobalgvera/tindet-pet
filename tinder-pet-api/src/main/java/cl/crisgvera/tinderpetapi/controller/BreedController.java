package cl.crisgvera.tinderpetapi.controller;

import cl.crisgvera.tinderpetapi.model.Breed;
import cl.crisgvera.tinderpetapi.service.BreedService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@CrossOrigin
@RequestMapping(value = "/breeds")
public class BreedController {

    private final BreedService breedService;

    public BreedController(BreedService breedService) {
        this.breedService = breedService;
    }

    @GetMapping
    public ResponseEntity<Collection<Breed>> getAll() {
        return new ResponseEntity<>(breedService.findAll(), HttpStatus.OK);
    }
}
