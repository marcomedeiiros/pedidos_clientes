import ClienteModel from "../Models/ClienteModel.js";

class ClienteController{
    constructor(){

    }

    create(req,res){
        const nome_cliente = req.body.nome_cliente
        ClienteModel.create(nome_cliente).then(
            resposta =>{
                console.debug("Cadastrando um cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro cadastrando uma cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
    read(req,res){
        ClienteModel.read().then(
            resposta =>{
                console.debug("Exibindo cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro Exibindo cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
    update(req,res){
        const id_cliente = req.params.id_cliente
        const nome_cliente = req.body.nome_cliente
        ClienteModel.update(id_cliente,nome_cliente).then(
            resposta =>{
                console.debug("Atualizando cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro Atualizando cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req,res){
        const id_cliente = req.params.id_cliente
        ClienteModel.delete(id_cliente).then(
            resposta =>{
                console.debug("Deletando cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro Deletando cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
}

export default new ClienteController()