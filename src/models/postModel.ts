import { Post, posts } from "../database/Post";

export function getPosts(): Post[] {
  return posts;
}

export function getPostId(id: number): Post | null {
  return posts.find(post => post.id === id) || null
}
