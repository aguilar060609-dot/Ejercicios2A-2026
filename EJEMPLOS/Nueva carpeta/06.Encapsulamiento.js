class Usuario {
    #numusuario;
    #password;
    
    constructor(numusuario, password) {
        this.#numusuario = numusuario;
        this.#password = password;
    }
    
    #validarPassword(contra) {
        return contra.length >= 5;
    }

    login(usuario, pass) {
        if (this.#validarPassword(pass)) {
            console.log(`¡Bienvenido, ${this.#numusuario}!`);
        } else {
            console.log("Contraseña incorrecta. Inténtalo de nuevo.");
        }
    }
}

const usuario1 = new Usuario("Luis", "klkk");
usuario1.login("Luis", "klkk");

