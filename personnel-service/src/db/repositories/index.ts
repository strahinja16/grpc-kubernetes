import {getRepository} from 'typeorm';
import {v4 as uuid} from 'uuid';
import {Personnel, Role} from "../entities/personnel";
import * as passwordHash from "password-hash";
import * as jwt from 'jsonwebtoken';
import {config} from "../../config";

export interface IPersonJwt {
    personnel: Partial<Personnel>;
    jwt: string;
}

class PersonnelRepository {
    signUp = async (personnel: Partial<Personnel>): Promise<IPersonJwt> => {
        const personnelRepository = getRepository(Personnel);
        const existingPerson = await personnelRepository.findOne({ email: personnel.email });
        if (existingPerson) {
            throw new Error('The person with this email already exists.');
        }

        personnel.serial = uuid();
        personnel.password = passwordHash.generate(personnel.password);
        personnel.role = Role.operator;

        const savedPersonnel = await getRepository(Personnel).save(personnel);
        delete savedPersonnel.password;

        return {
            personnel: savedPersonnel,
            jwt: jwt.sign(JSON.parse(JSON.stringify(savedPersonnel)), config.appKey!),
        }
    };

    login = async (personnel: Partial<Personnel>): Promise<IPersonJwt> => {
        const personnelRepository = getRepository(Personnel);
        const existingPerson = await personnelRepository.findOne({ email: personnel.email });
        if (!existingPerson) {
            throw new Error('Person with this email not found.');
        }

        if (!passwordHash.verify(personnel.password, existingPerson.password)) {
            throw new Error('Wrong password.');
        }

        delete existingPerson.password;

        return {
            personnel: existingPerson,
            jwt: jwt.sign(JSON.parse(JSON.stringify(existingPerson)), config.appKey!),
        }
    };

    changeRole = async (personnel: Partial<Personnel>): Promise<Personnel> => {
        const personnelRepository = getRepository(Personnel);

        const existingPerson = await personnelRepository.findOne(personnel.id);
        if (!existingPerson) {
            throw new Error('Person not found.');
        }

        existingPerson.role = personnel.role;

        return await getRepository(Personnel).save(existingPerson);
    };
}

export const personnelRepository = new PersonnelRepository();
