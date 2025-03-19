import { v7 as uuidV7 } from 'uuid';

export default class CreateUserService {
    #repo;

    constructor(repo) {
        this.#repo = repo;
    }

    async createUser(input) {
        // TODO: validate fields.

        const user = {
            id: uuidV7(),
            name: input.name,
            surname: input.surname,
            gender: input.gender
        };

        const credentials = {
            id: uuidV7(),
            userId: user.id,
            email: input.email,
            password: input.password
        };

        const account = {
            id: uuidV7(),
            userId: user.id,
            name: input.accountName
        };

        await this.#repo.users.saveUser(user, credentials, account);
    }
}
