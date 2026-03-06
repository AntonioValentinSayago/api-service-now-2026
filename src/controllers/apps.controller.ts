import type { Request, Response, NextFunction } from "express";
import { prisma } from "../config/prisma";

export async function listApps(_req: Request, res: Response, next: NextFunction) {
  try {
    const apps = await prisma.apps.findMany({ orderBy: { id: "asc" } });
    return res.status(200).json({
     success: true,
     code: 200, 
     message: apps.length ? "Apps retrieved successfully" : "Data Not Found ",
     data: apps 
    });
  } catch (error) {
    next(error)
    console.log('Server Not Found');
    return res.status(500).json({
      success: false,
      code: 500,
      message: 'Servidor no Disponible'
    })
  }
}