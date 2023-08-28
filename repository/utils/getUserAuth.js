class GetUserAuth {
    constructor() {
        // Implementación predeterminada
    }

    async getUserAuth() {
        throw new Error("Sobreescribir para obtener la instancia de la Base de datos");
    }
}

class GetUserAuth_SupaBase extends GetUserAuth {
    constructor() {
        super();
    }

    async getUserAuth(dataBase, access_token) {
        const { data : {user}, error } = await dataBase.auth.getUser(access_token);
        return user;
    }
}


export { GetUserAuth_SupaBase as GetUserAuth };