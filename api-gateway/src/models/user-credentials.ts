export interface IPersonnelCredentials {
    serial: string;
    role: string;
}

export const typeDef = `
  input PersonnelCredentials {
    serial: String!
    role: String!
  }
`;
