import Fastity from 'fastify';
import cors from '@fastify/cors';
import mainRouter from './routes/mainRouter';
import dotenv from "dotenv";

dotenv.config()

const app = Fastity();

app.register(cors);

app.get('/', () => {
  return 'bullshit'
});

const PORT:number = Number(process.env.PORT);

app.listen({
  port:PORT,
}).then(() => {
  console.log(`Server up on port ${PORT}`)
})