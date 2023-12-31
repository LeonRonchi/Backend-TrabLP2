import express from "express";
import rotaCategoria from "./rotas/rotaCategoria.js";
import rotaProduto from "./rotas/rotaProduto.js";
import rotaCliente from "./rotas/rotaCliente.js";
import rotaFornecedor from "./rotas/rotaFornecedor.js";

//Aplicação HTTP pronta, bastando parametrizá-la
const host = "0.0.0.0";
const porta = 4000;
const app = express();

//Preparar a app para entender o formato JSON
app.use(express.json());

app.use('/categoria', rotaCategoria);
app.use('/produto', rotaProduto);
app.use('/cliente', rotaCliente);
app.use('/fornecedor', rotaFornecedor);


app.listen(porta, host, ()=>{
    console.log(`API do sistema em execução: ${host}:${porta}`);
});