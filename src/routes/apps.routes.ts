import { Router } from "express";
import { listApps } from "../controllers/apps.controller";

export const useRouter = Router();

useRouter.get("/", listApps);

