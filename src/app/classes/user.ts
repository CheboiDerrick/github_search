import { IUser } from "../interfaces/user";
export class User implements IUser {
    constructor(public name: string, public email: string, public bio:string, public avatar_url: string, public public_repos: number, public followers: number, public following: number, public join_date: string) {
        this.name = name;
        this.email = email;
        this.bio=bio;
        this.avatar_url = avatar_url;
        this.public_repos = public_repos;
        this.followers=followers;
        this.following=following;
        this.join_date=join_date
    }
}
