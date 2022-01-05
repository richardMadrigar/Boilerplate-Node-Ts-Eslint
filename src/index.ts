import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// importaçoes de rotas
import indexRoutes from './routes/Login.routers';

const app = express();

app.use(express.json()); // aceitar requisiçoes do tipo json
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev')); // log no terminal
app.use(cors()); // aceitar requisiçoes de outras rota

// executando rotas
app.use(indexRoutes);

app.listen(3001, () => {
  console.log('Servidor rodando na porta', 3001);
});
