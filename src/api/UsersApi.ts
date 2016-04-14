import {JsonController} from "controllers.ts/decorator/Controllers";
import {Get, Post} from "controllers.ts/decorator/Methods";
import {UserRepository} from "../repository/UserRepository";
import {injectable, inject} from "inversify";

@JsonController("/users")
@injectable()
export class UsersApi {


    constructor(@inject("UserRepository") private userRepository: UserRepository) {
    }

    @Get()
    getAll() {
        return this.userRepository.findAllUsers();
    }

    @Post()
    createUser() {

    }
}