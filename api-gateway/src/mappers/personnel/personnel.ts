
import {IPersonnel, RoleEnum} from "../../models/personnel/personnel";
import { Personnel } from "../../proto/personnel/personnel_pb";

class PersonnelMapper {
    toGql(person: Personnel): IPersonnel {
        return {
            id: person.getId(),
            name: person.getName(),
            lastname: person.getLastname(),
            email: person.getEmail(),
            role: (person.getRole() as number) as RoleEnum,
            serial: person.getSerial(),
        };
    }
}

export const personnelMapper =  new PersonnelMapper();
