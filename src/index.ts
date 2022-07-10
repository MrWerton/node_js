import "reflect-metadata"
import express from 'express';
import { userRouter } from './routes/User.routes';
import { createConnection } from "./infra/database";

import './shared/container'

const app = express()
app.use(express.json());
app.use(userRouter);
createConnection()
app.listen(3000, ()=>console.log('server run'))