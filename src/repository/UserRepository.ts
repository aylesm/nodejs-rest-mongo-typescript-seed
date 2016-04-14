import {User} from "../domain/User";

export interface UserRepository {

    findAllUsers(): User[];

}