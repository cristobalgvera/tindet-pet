package cl.crisgvera.tinderpetapi.service.util;

import java.util.Collection;
import java.util.Set;

public interface CrudMethods<Entity, ID> {
    Entity findById(ID id);

    Collection<Entity> findAll();

    Entity save(Entity entity);

    Entity update(Entity entity);

    void deleteById(ID id);
}
