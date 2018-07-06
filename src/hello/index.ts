import * as Alexa from "alexa-sdk";

const handlers: Alexa.Handlers<Alexa.Request> = {
    'LaunchRequest': function () {
        this.emit('SayHello');
    },
    'HelloWorldIntent': function () {
        this.emit('SayHello');
    },
    'SayHello': function () {
        this.emit(':tell', 'Hello World!');
    },
};

export const handler = (event: Alexa.RequestBody<Alexa.Request>, context: Alexa.Context, callback?: (err: any, response: any) => void) => {
    const alexa = Alexa.handler(event, context);
    alexa.resources = {};
    alexa.registerHandlers(handlers);
    alexa.execute();
};
