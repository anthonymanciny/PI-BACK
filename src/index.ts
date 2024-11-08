import express from "express";

const port = 8000
const app = express()

const routes = express.Router();

routes.get("/". (req,res) => {
    res.send({message : "Hello World"})
})

app.use(routes);

app.listen(port,() => console.log("Servidor rodando na porta ${port}"))