import env from 'dotenv';
env.config();

class RegisterUser {
    constructor() {
        // Implementación predeterminada
    }

    async registerUser() {
        throw new Error("Sobreescribir para obtener la instancia de la Base de datos");
    }
}

class RegisterUser_SupaBase extends RegisterUser {
    constructor() {
        super();
        // Implementación predeterminada
    }

    async registerUser(dataBase, email, password) {
        const { data, error } = await dataBase.auth.signUp({ email, password });
        if (error) { throw error; }
        return data;
    }
}

export { RegisterUser_SupaBase as RegisterUser };
