import {UserRepository} from "./UserRepository";
import {User} from "../domain/User";
import {injectable} from "inversify";

@injectable()
export class UserRepositoryImpl implements UserRepository {

    findAllUsers(): User[] {
        let users: User[] = [];

        users.push(new User("Test"));

        return users;
    }

}