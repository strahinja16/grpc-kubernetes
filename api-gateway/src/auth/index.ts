import {IPersonnel, RoleEnum} from "../models/personnel/personnel";
import {AuthenticationError} from "apollo-server-errors";

export const authenticate = (user: IPersonnel) => {
    if (!user) {
        throw new AuthenticationError('You must be logged in for this action.');
    }
};

export const authorizeManager = (user: IPersonnel) => {
    if (!user || ![RoleEnum.manager, RoleEnum.admin].includes(user.role as RoleEnum)) {
        throw new AuthenticationError('Your role must be manager or higher for this action.');
    }
};

export const authorizeAdmin = (user: IPersonnel) => {
    if (!user || user.role as RoleEnum !== RoleEnum.admin) {
        throw new AuthenticationError('Your role must be admin for this action.');
    }
};
