import {JsonController} from "controllers.ts/decorator/Controllers";
import {Get} from "controllers.ts/decorator/Methods";

@JsonController("/users")
export class UsersApi {

    @Get()
    getAll() {
        return [];
    }
}