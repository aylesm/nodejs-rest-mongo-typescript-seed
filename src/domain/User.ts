import {Entity, Field} from "hydrate-mongodb";

@Entity()
export class User {

    @Field()
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
}
