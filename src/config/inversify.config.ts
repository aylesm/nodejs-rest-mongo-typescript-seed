import { Kernel } from "inversify";
import {UserRepository} from "../repository/UserRepository";
import {UserRepositoryImpl} from "../repository/UserRepositoryImpl";
import {UsersApi} from "../api/UsersApi";
var kernel = new Kernel();
export default kernel;

kernel.bind<UserRepository>("UserRepository").to(UserRepositoryImpl);
kernel.bind<UsersApi>("UsersApi").to(UsersApi);