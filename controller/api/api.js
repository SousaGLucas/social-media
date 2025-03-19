import "dotenv/config";

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import createUserhandler from "./create_user.js";

export default class Api {
    #api;

    constructor(
        createUserServive
    ) {
        this.#api = express();

        const origins = [
            `${process.env.APP_HOST}:${process.env.APP_PORT}`
        ];

        const headers = [
            "Content-Type"
            , "withCredentials"
            , "credentials"
        ];

        this.#api.use(express.urlencoded({extended: true}));
        this.#api.use(express.json());
        this.#api.use(cookieParser());
        this.#api.use(cors({ origin: `${process.env.APP_HOST}:${process.env.APP_PORT}`, credentials: true }));
        this.#api.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", origins);
            res.header("Access-Control-Allow-Headers", headers);
            res.header('Access-Control-Allow-Credentials', "true");
            next();
        });

        this.#api.post("/api/v1/social-media/users", createUserhandler(createUserServive));
    }

    listen() {
        this.#api.listen(process.env.APP_PORT, function () {
            console.log("starting api server")
        })
    }
}
