// console.log("funciona") --> teste 1 pra saber que tá rodando
// Crie uma aplicação para um banco soulBrasil. Neste banco deverá conter:
// Sistema de autenticação(o usuário poder entrar na sua conta);
// Cada usuário terá uma agencia e conta;
// O usuário poderá fazer transferências e visualizar o saldo;
// Obs.: tente utilizar Paradigma de orientação ao Objeto.
// Definir as Propriedades do usuário
// interface UserBankProps {
//     cpf: string;
//     email: string;
//     senha: string;
//     agencia: number;
//     conta: string;
// }
//CLASS = FORMA DO BOLO
//!pra começar vazio 
//construction: Serve pra modelar E ORGANIZAR nosso objeto 
var UserBank = /** @class */ (function () {
    function UserBank(cpf, email, senha, agencia, conta, saldo) {
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
    }
    //Criando um método pra ver se funfando
    UserBank.prototype.escreverPropriedades = function () {
        console.log("CPF: " + this.cpf);
        console.log("EMAIL: " + this.email);
        console.log("SENHA: " + this.senha);
        console.log("AGÊNCIA: " + this.agencia);
        console.log("CONTA: " + this.conta);
        console.log("SALDO: R$" + this.saldo);
    };
    // autenticacao(){
    //     if(this.conta == "123456" && this.agencia === 12345){
    //         console.log(info);
    //     } else{
    //         console.log("Dados incorretos")
    //     }
    // }
    UserBank.prototype.getcpf = function () {
        return this.cpf;
    };
    UserBank.prototype.setcpf = function (cpf) {
        this.cpf = cpf;
    };
    UserBank.prototype.getemail = function () {
        return this.email;
    };
    UserBank.prototype.setemail = function (email) {
        this.email = email;
    };
    UserBank.prototype.getsenha = function () {
        return this.senha;
    };
    UserBank.prototype.setsenha = function (senha) {
        this.senha = senha;
    };
    UserBank.prototype.getagencia = function () {
        return this.agencia;
    };
    UserBank.prototype.setagencia = function (agencia) {
        this.agencia = agencia;
    };
    return UserBank;
}());
var info = new UserBank("000.123.456-83", "wanessalanne96@gmail.com", "123", 12345, "123456", 10000);
// info.escreverPropriedades();
// info.autenticacao();
function chama() {
    conta = document.getElementById("conta").value
    agencia = document.getElementById("agencia").value
    // console.log(info.getcpf());
    // document.write(info.getcpf());
    document.write(conta + "<br><br>");
    document.write(agencia);
}
chama();
