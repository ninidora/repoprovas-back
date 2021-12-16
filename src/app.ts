import 'reflect-metadata';
import connectDatabase from './database';
import express from 'express';
import cors from 'cors';
import categoriesRouter from './routers/categoriesRouter';
import disciplinesRouter from './routers/disciplinesRouter';

export async function init() {
  await connectDatabase();
}

const app = express();
app.use(cors());
app.use(express.json());

// CATEGORIES
app.use('/categories', categoriesRouter);

// DISCIPLINES

app.use('/disciplines', disciplinesRouter);

export default app;
