import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import kpiroutes from "./routes/kpi.js";
import { default as KPI } from "./models/KPI.js";
import { kpis } from "./data/data.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Portfolio Management API!");
});

app.use("/kpi", kpiroutes);

const PORT = process.env.PORT || 5000;
const DB_POPULATE = process.env.DB_POPULATE === "true";
const DROP_DB = process.env.DROP_DB === "true";

mongoose
  .connect(process.env.MONGO_URI)
    .then(async () => {
      console.log("✅ MongoDB ");
    if (DROP_DB) await mongoose.connection.db.dropDatabase();
    if (DB_POPULATE) await KPI.insertMany(kpis);
    app.listen(PORT, () => {
      console.log(`✅ Server ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(`Failed to connect to MongoDB: ${error.message}`);
    process.exit(1);
  });
