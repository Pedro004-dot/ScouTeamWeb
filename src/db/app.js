import express from 'express';
import cors from 'cors';
import coon from './config/coon.js';  
import userController from './controllers/user.js'
import atletaController from "./controllers/atleta.js"
const app = express();

app.use(cors());
app.use(express.json());

// Conexão com o banco de dados
coon();

// Rotas
// app.use("/auth", UserController);
// app.use("/fazenda", FazendaController);

// app.use("/user",User)
app.use("/user", userController);
app.use("/atleta", atletaController);
app.listen(3000, function(){
    console.log('Servidor online');
});
