import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';
import schema from './schema';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(compression());

const servidor = new ApolloServer({
    schema,
    introspection:true,
});

servidor.applyMiddleware({app});

app.get('/', (req, res) => {
    res.json({ 
        ok:true,
        mensaje:true,
    });
});
const httpServer = createServer(app);

httpServer.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});