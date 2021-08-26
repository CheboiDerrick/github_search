import { IUser } from "../interfaces/user";
export class User implements IUser {
    constructor(public name: string, public email: string, public avatar: string, public public_repos: number, public followers: number, public following: number, public join_date: string) {
        this.name = name;
        this.email = email;
        this.avatar = avatar;
        this.public_repos = public_repos;
        this.followers=followers;
        this.following=following;
        this.join_date=join_date
    }
}
