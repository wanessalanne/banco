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
class UserBank{

    constructor(private cpf: string, private email: string, private senha: string, private agencia: number, private conta: string, private saldo: number) {
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
    }

    //Criando um método pra ver se funfando
    escreverPropriedades() {
        console.log("CPF: " + this.cpf);
        console.log("EMAIL: " + this.email);
        console.log("SENHA: " + this.senha)
        console.log("AGÊNCIA: " + this.agencia)
        console.log("CONTA: " + this.conta);
        console.log("SALDO: R$" + this.saldo);
    }

    // autenticacao(){
    //     if(this.conta == "123456" && this.agencia === 12345){
    //         console.log(info);
    //     } else{
    //         console.log("Dados incorretos")
    //     }
    // }
    getcpf() {
        return this.cpf;
    }
      
    setcpf(cpf: string) {
       this.cpf = cpf;
    }
      
    getemail() {
        return this.email;
    }
      
    setemail(email: string) {
        this.email = email;
    }
      
    getsenha() {
        return this.senha;
    }
      
    setsenha(senha: string) {
        this.senha = senha;
    }
      
    getagencia() {
        return this.agencia;
    }
      
    setagencia(agencia: number){
         this.agencia = agencia;
    }

}

let info = new UserBank("000.123.456-83", "wanessalanne96@gmail.com", "123", 12345, "123456", 10000)
info.escreverPropriedades();
// info.autenticacao();

function chama(){
    console.log(info.getcpf());    
}







