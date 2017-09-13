var Banco = function(gerente){
	this.gerente = gerente;
	this.clientes = [];	
	


	this.abrirConta = function(cliente){
		this.clientes.push(cliente);
	};

	this.fecharConta = function(cliente){
		this.clientes.splice(cliente)
	};

	this.versaldo = function(saldo){
		
	};

};

var Cliente = function(cpf,nome,limite){
	this.cpf = cpf;
	this.nome = nome;
	this.saldo = 0.0;
	this.extrato = [];
	this.limite = limite;
	this.depositar = function(dinheiro){
		this.saldo = this.saldo + dinheiro;
		this.extrato.push("+"+dinheiro);
	};
	this.sacar = function(dinheiro){
		this.saldo = this.saldo - dinheiro;
		this.extrato.push("-"+dinheiro);
	};

};

var cliente1 = new Cliente ("179.508.0.79", "Guto", 1000.00);
var cleinte2 = new Cliente("179.666.2.24","Batata", 10000.00);
var BancoPedro = new Banco("Pedro");
BancoPedro.abrirConta("Guto");
BancoPedro.abrirConta("Batata");
cliente1.depositar(100.00);
cliente1.sacar(10000.00);
console.log(cliente1); 
console.log(cleinte2);
console.log(BancoPedro);
