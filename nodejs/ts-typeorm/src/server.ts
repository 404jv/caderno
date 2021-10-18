import "reflect-metadata";
import { createConnection } from "typeorm";


createConnection().then(() => console.log("📦 Connected to database."));
