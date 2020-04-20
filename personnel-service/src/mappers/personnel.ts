import {Personnel as PersonnelEntity } from "../db/entities/personnel";
import {Personnel, Role} from "../proto/personnel/personnel_pb";

class PersonnelMapper {
    toGrpc(person: PersonnelEntity): Personnel {
        const personnel = new Personnel();
        personnel.setEmail(person.email);
        personnel.setId(person.id);
        personnel.setSerial(person.serial);
        personnel.setName(person.name);
        personnel.setLastname(person.lastname);
        personnel.setRole((person.role as number) as Role);
        return personnel;
    }
}

export const personnelMapper =  new PersonnelMapper();
