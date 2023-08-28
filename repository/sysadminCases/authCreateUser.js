class AuthCreateUser {
    constructor() {
        // Implementación predeterminada
    }

    async authCreateUser() {
        throw new Error("Sobreescribir para obtener la instancia de la Base de datos");
    }
}

class AuthCreateUser_SupaBase extends AuthCreateUser {
    constructor() {
        super();
    }

    async authCreateUser(dataBase, email) {
        const { data, error } = await dataBase.auth.admin.createUser({
            email,
            email_confirm: true
        });
        if (error) { throw error; }
        return data;
    }
}

export { AuthCreateUser_SupaBase as AuthCreateUser };
