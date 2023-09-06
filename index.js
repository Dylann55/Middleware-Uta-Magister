/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express from 'express';
import cors from 'cors';
import { DataBase } from './dataBase/supabase.js';
import routes from './routes/routes.js';

const app = express();
const PORT = 3001 || process.env.PORT;

const dataBase = new DataBase();

app.use(cors());
app.use(express.json());
app.use(async (req, res, next) => { req.dataBase = await dataBase.connect(); next(); }, routes);
app.use(routes);

app.get('/', (req, res) => { res.json({ message: 'Welcome to Master\'s Management' }); });

// eslint-disable-next-line no-console
app.listen(PORT, () => { console.log(`running on port: ${PORT}`); });
