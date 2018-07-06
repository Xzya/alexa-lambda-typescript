import * as express from "express";
import * as bodyParser from "body-parser";
import * as Alexa from "alexa-sdk";
import { AddressInfo } from "net";
import context = require("aws-lambda-mock-context");

import { handler as helloHandler } from "./hello";

function CreateHandler(handler: (event: Alexa.RequestBody<Alexa.Request>, context: Alexa.Context, callback?: (err: any, response: any) => void) => void): express.RequestHandler {
    return (req, res) => {
        const ctx = context();

        handler(req.body, ctx);

        ctx.Promise
            .then(resp => {
                return res.status(200).json(resp);
            })
            .catch(err => {
                return res.status(500).send(err);
            });
    };
}

// create server
const server = express();
const listener = server.listen(process.env.port || process.env.PORT || 3980, function () {
    const { address, port } = listener.address() as AddressInfo;
    console.log('%s listening to %s%s', server.name, address, port);
});

// parse json
server.use(bodyParser.json());

// connect the lambda functions to http
server.post("/", CreateHandler(helloHandler));
