import {IUser} from "./IUser.ts";

export interface IAuth {
    user: IUser
    accessToken: string,
}
