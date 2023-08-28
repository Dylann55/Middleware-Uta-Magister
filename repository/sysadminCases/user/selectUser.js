class SelectUser {
    constructor() {
        // Implementación predeterminada
    }

    async selectUser() {
        throw new Error("Sobreescribir para obtener la instancia de la Base de datos");
    }
}

class SelectUser_SupaBase extends SelectUser {
    constructor() {
        super();
    }

    async selectUser(dataBase) {
        const { data, error } = await dataBase.from('user')
            .select();
        if (error) { throw error; }
        return data;
    }
}

export { SelectUser_SupaBase as SelectUser };