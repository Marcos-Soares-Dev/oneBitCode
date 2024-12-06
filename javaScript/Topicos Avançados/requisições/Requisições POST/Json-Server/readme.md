No pacote json-server devemos iniciar o projeto criando um arquivo db.json
que funcionara como se fosse o nosso pseudo banco de dados que pode ser 
utilizado com os principais recursos de um banco de dados rest como GET POST PUT DELETE

a criação dos endpoints é bastante simples:
Devemos criar o arquivo db.json e la dentro tera o nosso objeto padrao.
dentro desse objeto padrao podemos adicionar uma key especificando o endpoint
como por exemplo posts. que seria um endpoint para o armazenamento dos posts de um blog.
O Valor dessa Key deve ser um array de objetos, no qual o array seja responsavel por armazenar
todos os posts que serão cada um deles um objeto com suas keys e valores individuais
é importante frizar que o json-server sera responsavel por atibuir um id para novas chaves detro do 
array, isso de forma automatica ja.

