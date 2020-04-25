import * as jwt from "jsonwebtoken";
import { Request } from "express";
import {config} from "../../config";

export const gqlContext = ({ req } : { req: Request }) => {
    if (!req.headers.authorization || !req.headers.authorization.includes('Bearer')) {
        return {};
    }

    const user = jwt.verify(req.headers.authorization.substring(7), config.appKey!);
    return { user };
};
