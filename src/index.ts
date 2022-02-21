import express from 'express';
import * as postControllers from './controllers/postController';

const app = express();

const { PORT = 3000 } = process.env;

app.use(express.json());

// busca todos os posts
app.get('/posts', postControllers.getPosts);

app.listen(PORT, () => {
  console.log(`Online na porta ${PORT}`);
});