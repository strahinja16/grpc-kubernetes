
import {IPersonnel, RoleEnum} from "../../graphql/models/personnel/personnel";
import { Personnel } from "../../proto/personnel_pb";

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
