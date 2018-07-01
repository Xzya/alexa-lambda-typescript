# Alexa Skill using AWS Lambda in Typescript

This is a sample Alexa Skill handler based on [aws-lambda-typescript](https://github.com/balassy/aws-lambda-typescript).

## Setup

1. Install the [Serverless Application Framework](https://serverless.com/) as a globally available package:

```bash
$ npm install serverless -g
```

Verify that Serverless was installed correctly:

```bash
$ serverless -v
```

2. Setup AWS credentials:

Save the credentials to the `~/.aws/credentials` file:

```bash
serverless config credentials --provider aws --key YOUR_ACCESS_KEY --secret YOUR_SECRET_KEY
```

The `default` profile will be used by default. If you want to use another, you can pass the `--aws-profile` argument to the `serverless` commands. E.g.:

```sh
serverless deploy --aws-profile Work
```

3. Clone this repository.

4. Install the dependencies:

```bash
$ npm install
```

5. Customize the name of your service by changing the following line in the `serverless.yml` file:

```yaml
service: serverless-sample
```

6. Customize the alexa skill id by changing the following line in the `serverless.yml` file:

```yaml
      - alexaSkill: amzn1.ask.skill.xx-xx-xx-xx-xx
```

## Developer tasks

For more info, check `package.json` and [the aws-lambda-typescript documentation](https://github.com/balassy/aws-lambda-typescript#developer-tasks).

## What you can find in the code

The project contains the base structure of a project, with a dummy handler for the `LaunchRequest` intent which responds with `"Hello, world!"`.

## TODO

- Add example test, ideally with [lambda-tester](https://github.com/vandium-io/lambda-tester), but currently it doesn't have a Typescript definition
- Fix `devDependencies` being packaged as well

## Read more

- [aws-lambda-typescript](https://github.com/balassy/aws-lambda-typescript)
- [Serverless Reference](https://serverless.com/framework/docs/)
- [Serverless.yml Reference](https://serverless.com/framework/docs/providers/aws/guide/serverless.yml/)

## License

Open sourced under the [MIT license](./LICENSE.md).