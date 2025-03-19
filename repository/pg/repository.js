import pg from "pg";
import UsersRepository from "./users.js";

export default class Repository {
    #pg;

    users;

    constructor() {
        this.#pg = new pg.Pool({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT,
            idleTimeoutMillis: 10000,
            connectionTimeoutMillis: 3000,
            ssl: false,
            max: 10,
            maxUses: 1024,
        });

        this.users = new UsersRepository(this.#pg);
    }
}
