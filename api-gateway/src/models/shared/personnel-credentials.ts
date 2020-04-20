export interface IPersonnelCredentials {
    personnelId: number;
    role: string;
}

export const typeDef = `
  input PersonnelCredentials {
    personnelId: Int!
    role: Int!
  }
`;
