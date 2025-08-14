"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class MongoConnection {
    constructor() {
        this.db = null;
        console.log("MongoConnection instance created");
        this.client = new mongodb_1.MongoClient("mongodb://localhost:27017");
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new MongoConnection();
        }
        return this.instance;
    }
    async connect() {
        if (this.db) {
            console.log("Already connected to the database");
            return this.db;
        }
        try {
            await this.client.connect();
            console.log("Connected to MongoDB");
            this.db = this.client.db("mydatabase");
            return this.db;
        }
        catch (error) {
            console.error("Failed to connect to MongoDB", error);
            throw error;
        }
    }
}
async function bootstrap() {
    const mongoConnection1 = MongoConnection.getInstance();
    const db1 = await mongoConnection1.connect();
    console.log("Database name:", db1.databaseName);
    const mongoConnection2 = MongoConnection.getInstance();
    const db2 = await mongoConnection2.connect();
    console.log("Database name from second instance:", db2.databaseName);
    console.log(mongoConnection1 === mongoConnection2); // true, both are the same instance
}
bootstrap();
