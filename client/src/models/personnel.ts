
export interface IPersonnel {
  id: number;
  name: string;
  lastname: string;
  email: string;
  serial: string;
  role: RoleEnum;
}

export enum RoleEnum {
  operator,
  manager,
  admin,
}
