import express from "express";
import cors from "cors";
import db from "./db/db.js";
import userRoutes from "./routers/userRoutes.js";
import animalRoutes from "./routers/animalRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/user", userRoutes);
app.use("/api/animal", animalRoutes);



app.listen(process.env.PORT, () =>
console.log("Backend server running on port: ", process.env.PORT)
);

db.dbConnection(); 