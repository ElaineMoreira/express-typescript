import PostContent from "../interfaces/Post";

export interface Post extends PostContent {
  id: number;
}

export const posts: Post[] = [
  {
    "id": 1,
    "title": "Putin disse a Macron e Scholz que vai reconhecer a independência de regiões separatistas da Ucrânia",
    "author": "Elaine",
    "category": "tecnologia",
    "publicationDate": "2022-02-21",
  },
  {
    "id": 2,
    "title": "Imagens de satélite mostram forças russas mais próximas da fronteira com a Ucrânia",
    "author": "Diego",
    "category": "internacional",
    "publicationDate": "2022-02-21",
  }
]