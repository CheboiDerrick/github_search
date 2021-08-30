import { IUser } from "../interfaces/user";
export class User implements IUser {
    constructor(public login: string, public email: string, public bio:string, public avatar_url: string, public public_repos: number, public followers: number, public following: number, public join_date: string) {
    }
}
