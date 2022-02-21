import { Post, posts } from "../database/Post";

export function getPosts(): Post[] {
  return posts;
}
