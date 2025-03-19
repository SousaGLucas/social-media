import Api from "./controller/api/api.js";
import CreateUserService from "./service/users/create_user.js";
import Repository from "./repository/pg/repository.js";

// Repositories
const repository = new Repository();

// services
const createUserService = new CreateUserService(repository);

// controller/api
const api = new Api(createUserService);

api.listen();

// service
// repository

// start
