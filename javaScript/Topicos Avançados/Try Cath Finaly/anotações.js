// try cath finally sao usados para tratativas de erros no js, 
// o bloco try ou "tentar" é usado para executar aquele bloco de codigo que pode conter erros

// o bloco cath ou "pegar" é usado para pegar os erros que foram gerados dentro do try e podemos aqui tratar 
// estes erros, uma outra observação é que diferente do erro padrao que poderia ser gerado o cath não trava a
// aplicação, ele vai pular o bloco e continuar a execução normalmente. 

// o bloco finally ou "finalmente" é um bloco "Garantido", que ira ser executado depois do try e do cath 
// independente de se houver um erro ou nao. O que pode ser usado para limpar algo, ou lançar uma menssagem
// ou o que você precise

// EXEMPLO:

function multiply(a, b) {
    return a * b;
}

try {
    console.log(multiply(1,2));
    console.log(multiply(1,"2"));
    console.log(multiply("dez",2));
    
} catch (error) {
    console.log(error.message);
} finally {
    console.log("finalmentes");
    
}