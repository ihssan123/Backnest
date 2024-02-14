import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { User } from "./users/entities/user.entity";
import { Comment } from "./comment/entities/comment.entity";

const config :PostgresConnectionOptions={
    type:"postgres",
    database:"testDB",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"root",
    entities:[User,Comment],
    synchronize:true
}
export default config