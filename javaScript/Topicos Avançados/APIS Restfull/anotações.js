// as APIS restfull sao apis que seguem uma padronização rest para tratar as interações do lado 
// cliente, facilitando a forma de se trabalhar com elas por conta de se seguir esse padrão 

// as pais interações podem ser feitas atraves de:
// GET > é usado para obter uma representação de algum dado que esta armazenado no nosso backend
// POST > é usado para mandar dados para o nosso backend atraves de uma representação
// PUT > é utilizado para modificar ou atualizar algo dentro do nosso backend
// DELETE > é utilizado para excluir algo que esta armazenado no nosso bacjend

// Essa parte de REPRESENTAÇÂO funciona assim. exemplo:
// quando fazemos uma solicitação GET ao nosso servidor pedindo por uma lista de usuarios que estao 
// salvos la, ele nao ira nos retornar um ARRAY com esses usuarios por exemplo 
// o que ele ira retornar sera uma representação na forma de texto dentro de um arquivo JSON
// para que possamos tratar aqueles dados.