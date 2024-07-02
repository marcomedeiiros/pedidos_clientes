import mysql from "mysql2"
import config from "../Config.js"

class PedidoModel{
    constructor(){
        this.conexao = mysql.createConnection(config.db)
        console.debug("Conectado")
    }

    create(nome_cliente, id_pedido, descricao, valor_total){
        let sql = `INSERT INTO pedido (nome_pedido,id_cliente, endereco, ) VALUES("${nome_cliente}","${id_pedido}","${descricao}","${valor_total}");`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([201,"Pedido inserido"])
            })
        });
    }

    read(){
        let sql = `SELECT * FROM pedidos;`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,retorno])
            })
        });
    }
    update(id_pedido,nome_cliente,id_pedido, descricao, valor_total){
        let sql = `UPDATE pedidos SET nome_pedidos="${nome_cliente}", id_pedido="${id_pedido}" WHERE id_pedido="${id_cliente}", descricao="${descricao}",valor_total="${valor_total}";`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Pedidos Atualizado"])
            })
        });
    }
    delete(id_pedido){
        let sql = `DELETE FROM pedidos WHERE id_pedido="${id_pedido}"`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Pedido Deletado"])
            })
        });
    }
}

export default new PedidoModel();