import express from 'express';
import AppRouter from '../src/routes/route.js'
import cors from 'cors'
const app = express();

app.use(express.json());

app.use(AppRouter)

app.use(
    cors({
      origin: "*",
      methods: "GET, POST, PUT, DELETE",
      allowedHeaders: "Content-Type, Authorization",
    })
  );

export default app;