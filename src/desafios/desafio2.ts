// Como podemos melhorar o esse código usando TS? 

interface NewPessoa {
    nome: string,
    idade: number,
    profissao: string
};
let pessoa1: NewPessoa = {
    nome: 'mateus',
    idade: 28,
    profissao: 'dev'
}
console.log(pessoa1)
