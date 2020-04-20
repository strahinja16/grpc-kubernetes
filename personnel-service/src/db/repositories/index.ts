import {getRepository} from 'typeorm';
import {v4 as uuid} from 'uuid';
import {Personnel, Role} from "../entities/personnel";
import * as passwordHash from "password-hash";

class PersonnelRepository {
    signUp = async (personnel: Partial<Personnel>): Promise<Personnel> => {
        try {
            const personnelRepository = getRepository(Personnel);
            const existingPerson = await personnelRepository.findOne({ email: personnel.email });
            if (existingPerson) {
                throw new Error('Bad request');
            }

            personnel.serial = uuid();
            personnel.password = passwordHash.generate(personnel.password);
            personnel.role = Role.operator;

            return await getRepository(Personnel).save(personnel);
        }catch (e) {
            console.log(`personnel-service: PersonnelRepository.signUp error: ${e.toString()}`)
        }
    };

    login = async (personnel: Partial<Personnel>): Promise<Personnel> => {
        try {
            const personnelRepository = getRepository(Personnel);
            const existingPerson = await personnelRepository.findOne({ email: personnel.email });
            if (!existingPerson) {
                throw new Error('Not found.');
            }

            if (!passwordHash.verify(personnel.password, existingPerson.password)) {
                throw new Error('Wrong password.');
            }

            return existingPerson;
        }catch (e) {
            console.log(`personnel-service: PersonnelRepository.login error: ${e.toString()}`)
        }
    };

    changeRole = async (personnel: Partial<Personnel>): Promise<Personnel> => {
        try {
            const personnelRepository = getRepository(Personnel);

            const existingPerson = await personnelRepository.findOne(personnel.id);
            if (!existingPerson) {
                throw new Error('Not found.');
            }

            existingPerson.role = personnel.role;

            return await getRepository(Personnel).save(existingPerson);
        }catch (e) {
            console.log(`personnel-service: PersonnelRepository.changeRole error: ${e.toString()}`)
        }
    };
}

export const personnelRepository = new PersonnelRepository();
