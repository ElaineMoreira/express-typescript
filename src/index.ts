import express from 'express';
import * as postControllers from './controllers/postController';

const app = express();

const { PORT = 3000 } = process.env;

app.use(express.json());

// Uma rota que lista todos os posts;
app.get('/posts', postControllers.getPosts);
//  Uma rota que exiba um único post por meio de seu id;
app.listen(PORT, () => {
  console.log(`Online na porta ${PORT}`);
});