import * as postService from "../services/postService";
import { Request, Response } from 'express';

export function getPosts(_req: Request, res: Response) {
  const { status, database } = postService.getPosts();
  res.status(status).json(database);
}

export function getPostId(req: Request, res: Response) {
  const { id } = req.params as { id: string };
  const { status, database, erro } = postService.getPostId(Number(id));
  if (erro) {
    return res.status(status).json({ erro });
  };
  res.status(status).json(database)
}
