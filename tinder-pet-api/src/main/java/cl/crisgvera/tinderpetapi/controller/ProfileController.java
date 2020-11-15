package cl.crisgvera.tinderpetapi.controller;

import cl.crisgvera.tinderpetapi.model.Profile;
import cl.crisgvera.tinderpetapi.service.ProfileService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@CrossOrigin
@RequestMapping(value = "/profiles")
public class ProfileController {

    private final ProfileService profileService;

    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @GetMapping
    public ResponseEntity<Collection<Profile>> getAll() {
        return new ResponseEntity<>(profileService.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/feature/{id}")
    public ResponseEntity<Collection<Profile>> getAllByFeatureId(@PathVariable Long id) {
        return null;
    }

    @GetMapping(value = "/breed/{id}")
    public ResponseEntity<Collection<Profile>> getAllByBreedId(@PathVariable Long id) {
        return new ResponseEntity<>(profileService.getAllByBreedId(id), HttpStatus.OK);
    }

}
