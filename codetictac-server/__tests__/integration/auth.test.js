import request from "supertest";
import faker from "faker";
import mongoose from "mongoose";
import app from "../../src/app";
import factory from "../factories";
import User from "../../src/app/models/User";

describe("Authentication", () => {
    beforeEach(async () => {
        await User.deleteMany({});
    });
    afterAll(async () => {
        await mongoose.connection.close();
    });
    it("should register a user with valid fields", async () => {
        const response = await request(app)
            .post("/register")
            .send({
                name: faker.name.findName(),
                email: faker.internet.email(),
                organization: faker.company.companyName(),
                password: faker.internet.password(),
                wakatime_token: faker.random.alphaNumeric()
            });
        expect(response.status).toBe(201);
    });

    it("should not register a user with invalid fields", async () => {
        const response = await request(app)
            .post("/register")
            .send({
                name: faker.name.findName(),
                organization: faker.company.companyName(),
                password: faker.internet.password(),
                wakatime_token: faker.random.alphaNumeric()
            });
        expect(response.status).toBe(400);
    });

    it("should not register a user with a e-mail that already exists", async () => {
        const user = await factory.create("User");
        const response = await request(app)
            .post("/register")
            .send({
                name: faker.name.findName(),
                email: user.email,
                organization: faker.company.companyName(),
                password: faker.internet.password(),
                wakatime_token: faker.random.alphaNumeric()
            });
        expect(response.status).toBe(409);
    });

    it("should authenticate with valid credentials", async () => {
        const user = await factory.create("User", {
            password: "123456"
        });
        const response = await request(app)
            .post("/login")
            .send({
                email: user.email,
                password: "123456"
            });
        expect(response.status).toBe(200);
    });

    it("should not authenticate with invalid credentials", async () => {
        const user = await factory.create("User", {
            password: "123123"
        });

        const response = await request(app)
            .post("/login")
            .send({
                email: user.email,
                password: "123456"
            });

        expect(response.status).toBe(401);
    });

    it("should not authenticate with a e-mail that not have an account", async () => {
        const response = await request(app)
            .post("/login")
            .send({
                email: faker.internet.email(),
                password: "123456"
            });

        expect(response.status).toBe(401);
    });

    it("should return jwt token when authenticated", async () => {
        const user = await factory.create("User", {
            password: "123123"
        });

        const response = await request(app)
            .post("/login")
            .send({
                email: user.email,
                password: "123123"
            });

        expect(response.body).toHaveProperty("token");
    });
});
