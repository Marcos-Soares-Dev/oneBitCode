class login {
    constructor(fullName, email, password) {
        this.fullName = fullName
        this.email = email
        this.password = password
    }

    checkLogin(email,password){
        if (email === this.email && password === this.password) {
            console.log(`Login Autorizado!
            Seja muito bem vindo(a) ${this.fullName}`);
            return true         
        } else {
            console.log(`Acesso negado!
            Por favor verifique email e/ou senha e tente novamente.`);
            return false     
        }
    }
}

const userMarcos = new login("Marcos Soares", "teste@gmail.com", "123");

console.log(userMarcos.checkLogin("deuRuim@gmail.com","esqueci123"));
console.log(userMarcos.checkLogin("deuRuim@gmail.com","123"));
console.log(userMarcos.checkLogin("teste@gmail.com","123"));