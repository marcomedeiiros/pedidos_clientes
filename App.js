import express from "express"
import ClienteController from "./Controllers/ClienteController.js"
import PedidoController from "./Controllers/PedidoController.js"

const server = express()

server.use(express.json())

server.get("/",(req,res)=>{
    res.status(200).json("Servidor Funcionando")
})

server.post("/clientes",ClienteController.create)
server.get("/clientes",ClienteController.read)
server.put("/clientes/:id_pedido",ClienteController.update)
server.delete("/clientes/:id_pedido",ClienteController.delete)

server.post("/pedidos",PedidoController.create)
server.get("/pedidos",PedidoController.read)
server.put("/pedidos/:id_cliente",PedidoController.update)
server.delete("/pedidos/:id_cliente",PedidoController.delete)

server.listen(5000)