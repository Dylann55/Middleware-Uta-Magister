class RefreshSession {
    constructor() {
        // Implementación predeterminada
    }

    async refreshSession() {
        throw new Error("Sobreescribir para obtener la instancia de la Base de datos");
    }
}

class RefreshSession_SupaBase extends RefreshSession {
    constructor() {
        super();
    }

    async refreshSession(dataBase, refresh_token) {
        const { data, error } = await dataBase.auth.refreshSession({ refresh_token });
        if (error) { throw error; }
        return { data, error };
    }
}

export { RefreshSession_SupaBase as RefreshSession };
