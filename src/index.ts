import express  from "express";
import cors from 'cors';
import { useRouter } from "./routes/apps.routes";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", useRouter);