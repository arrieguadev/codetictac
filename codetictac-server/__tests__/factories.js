import faker from "faker";
import { factory } from "factory-girl";
import User from "../src/app/models/User";

factory.define("User", User, {
    name: faker.name.findName(),
    email: faker.internet.email(),
    organization: faker.company.companyName(),
    password: faker.internet.password,
    wakatime_token: faker.random.alphaNumeric()
});

export default factory;
