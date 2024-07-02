import PedidoModel from "../Models/PedidoModel.js"

class PedidoController{
    constructor(){

    }

    create(req,res){
        const nome_pedido = req.body.nome_pedido
        const id_pedido = req.body.id_pedido
        DoceModel.create(nome_pedido,id_pedido).then(
            resposta =>{
                console.debug("Cadastrando um pedido")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro cadastrando um pedido")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
    read(req,res){
        PedidoModel.read().then(
            resposta =>{
                console.debug("Exibindo pedido")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro Exibindo pedido")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
    update(req,res){
        const id_pedido = req.params.id_pedido
        const nome_pedido = req.body.nome_pedido
        const id_cliente = req.body.id_cliente
        DoceModel.update(id_pedido,nome_pedido,id_cliente).then(
            resposta =>{
                console.debug("Atualizando pedido")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro Atualizando pedido")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req,res){
        const id_pedido = req.params.id_pedido
        PedidoModel.delete(id_pedido).then(
            resposta =>{
                console.debug("Deletando pedido")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro Deletando pedido")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
}

export default new PedidoController()