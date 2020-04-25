export enum RoleEnum {
    operator,
    manager,
    admin,
}

export interface ISignUpDto {
    name: string;
    lastname: string;
    email: string;
    password: string;
}

export interface ILoginDto {
    email: string;
    password: string;
}

export interface IChangeRoleDto {
    personnelId: number;
    role: RoleEnum;
}

export interface IPersonnel {
    id: number;
    name: string;
    lastname: string;
    email: string;
    serial: string;
    role: RoleEnum;
}

export interface IPersonnelWithJwt {
    personnel: IPersonnel;
    jwt: string;
}


export const typeDef = `
    type Personnel {
        id: Int!
        name: String!
        lastname: String!
        email: String!
        role: Int!
        serial: String!
    }
    
    type PersonnelWithJwt {
        personnel: Personnel!
        jwt: String!
    }
    
    input InputChangeRole {
        personnelId: Int!
        role: Int!
    } 
    
    input InputSignUp {
        name: String!
        lastname: String!
        email: String!
        password: String!
    }  
    
    input InputLogin {
        email: String!
        password: String!
    }      
`;


