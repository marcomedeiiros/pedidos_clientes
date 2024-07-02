create database pedidos;
use pedidos;

create table clientes (
id_cliente INT PRIMARY KEY AUTO_INCREMENT,
nome_cliente VARCHAR(30) NOT NULL,
endereco VARCHAR(30) NOT NULL
);

insert into clientes (nome_cliente, endereco) values
("Vinicius", "rua castro"), ("Amaral","avenida brasil"), ("Rubens", "avenida castro"), ("Dias", "amaral peixoto");

select * from clientes;

create table pedidos (
id_pedido INT PRIMARY KEY AUTO_INCREMENT,
nome_pedido VARCHAR(30) NOT NULL,
descricao VARCHAR(40) NOT NULL,
valor_total VARCHAR(40) NOT NULL,
id_cliente INT NOT NULL,
foreign key (id_cliente) references clientes(id_cliente)
);

insert into pedidos ( id_cliente, nome_pedido, descricao, valor_total) values
(1, "broa de fuba", "com farinha", "12 reais"),
(1, "Bolo de limao","com limao","20 reias"),
(2, "pizza", "com mortadela", "30 reais");

select * from pedidos;