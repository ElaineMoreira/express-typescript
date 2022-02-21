import * as postService from "../services/postService";
import { Request, Response } from 'express';

export function getPosts(_req: Request, res: Response) {
  const { status, database } = postService.getPosts();
  res.status(status).json(database);
}
