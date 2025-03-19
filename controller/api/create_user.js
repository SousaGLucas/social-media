import {errAccountNameAlreadyInUse} from "../../service/errors.js";

export default function createUserhandler(service) {
    return async function (req, res) {
        const name = req.body.name;
        if (name === undefined || name === "") {
            res.status(400).send({error: "missing 'name': required field"});
            return;
        }

        const surname = req.body.surname;
        if (surname === undefined || surname === "") {
            res.status(400).send({error: "missing 'surname': required field"});
            return;
        }

        const accountName = req.body.account_name;
        if (accountName === undefined || accountName === "") {
            res.status(400).send({error: "missing 'account_name': required field"});
            return;
        }

        const gender = req.body.gender;
        if (gender === undefined || gender === "") {
            res.status(400).send({error: "missing 'gender': required field"});
            return;
        }

        const email = req.body.email;
        if (email === undefined || email === "") {
            res.status(400).send({error: "missing 'email': required field"});
            return;
        }

        const password = req.body.password;
        if (password === undefined || password === "") {
            res.status(400).send({error: "missing 'password': required field"});
            return;
        }

        try {
            await service.createUser({
                name: name,
                surname: surname,
                accountName: accountName,
                gender: gender,
                email: email,
                password: password,
            });
        } catch (err) {
            switch (err.message) {
                case errAccountNameAlreadyInUse.message:
                    res.status(400).send({error: "account name already exists"});
                    break;
                default:
                    console.log(err);
                    res.status(500).send({error: "unexpected error"});
            }
        }

        res.status(201).end();
    }
}
