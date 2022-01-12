import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

// importaçoes de rotas
import indexRoutes from './routes/Login.routers';

const app = express();

const PORT = process.env.PORT_SERVER || 3001;

app.use(express.json()); // aceitar requisiçoes do tipo json
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev')); // log no terminal
app.use(cors()); // aceitar requisiçoes de outras rota
dotenv.config();

// executando rotas
app.use(indexRoutes);

app.listen(PORT, () => {
  console.log('Servidor rodando na porta', PORT);
});
