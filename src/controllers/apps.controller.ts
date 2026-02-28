import type { Request, Response } from "express";
import { prisma } from "../config/prisma";

export async function listApps(_req: Request, res: Response) {
  const apps = await prisma.apps.findMany({ orderBy: { id: "desc" } });
  return res.json(apps);
}