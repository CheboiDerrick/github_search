import { IRepo } from "../interfaces/repo";

export class Repo implements IRepo {
    constructor (public name:string, public description:string, public forks:number, public watchers:number, public html_url:string) {
        // this.name=name,
        // this.description=description;
        // this.forks=forks,
        // this.watchers=watchers;
        // this.html_url=html_url
    }

}
