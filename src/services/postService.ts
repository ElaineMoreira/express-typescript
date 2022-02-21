import * as postModel from "../models/postModel";

export function getPosts() {
  const database = postModel.getPosts();
  return { status: 200, database };
}
