class SignInWithOAuth {
    constructor() {
        // Implementación predeterminada
    }

    async signInWithOAuth() {
        throw new Error("Sobreescribir para obtener la instancia de la Base de datos");
    }
}

class SignInWithOAuth_SupaBase extends SignInWithOAuth {
    constructor() {
        super();
    }

    async signInWithOAuth(dataBase, provider, redirectTo) {
        const { data, error } = await dataBase.auth.signInWithOAuth({ provider, options: { redirectTo } });
        if (error) { throw error; }
        return { data, error };
    }
}

export { SignInWithOAuth_SupaBase as SignInWithOAuth };