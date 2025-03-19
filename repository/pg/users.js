import {errAccountNameAlreadyInUse} from "../../service/errors.js";

export default class UsersRepository {
    #db;

    constructor(db) {
        this.#db = db;
    }

    async saveUser(user, credentials, account) {
        const sql = `
            with u as (
                insert into users (id, name, surname, gender)
                    values (
                               $1,
                               $2,
                               $3,
                               $4
                           )
            ), c as (
                insert into user_credentials (user_id, email, password)
                    values (
                               $1,
                               $5,
                               $6
                           )
            )
            insert into user_accounts (id, user_id, name)
            values (
                       $7,
                       $1,
                       $8
                   );
        `;

        const conn = await this.#db.connect();

        try {
            const res = await conn.query(sql, [
                user.id,
                user.name,
                user.surname,
                user.gender,
                credentials.email,
                credentials.password,
                account.id,
                account.name
            ]);

            await conn.release();

        } catch (err) {
            await conn.release();

            switch (err.constraint) {
                case "user_accounts_name_key":
                    throw errAccountNameAlreadyInUse;
                default:
                    throw err;
            }
        }
    }
}
