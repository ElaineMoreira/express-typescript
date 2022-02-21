import * as postModel from "../models/postModel";

export function getPosts() {
  const database = postModel.getPosts();
  return { status: 200, database };
}

export function getPostId(id: number) {
  const database = postModel.getPostId(id);
  if (database === null) {
    const message = 'Post não encontrado';
    return { status: 400, erro : { message } }
  };
  return { status: 200, database }
}