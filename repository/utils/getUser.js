class GetUser {
    constructor() {
        // Implementación predeterminada
    }

    async getUser() {
        throw new Error("Sobreescribir para obtener la instancia de la Base de datos");
    }
}

class GetUser_SupaBase extends GetUser {
    constructor() {
        super();
    }

    async getUser(dataBase, userID) {
        const { data } = await dataBase.from('worker')
            .select()
            .eq('userID', userID)
            .maybeSingle();
        return data;
    }
}


export { GetUser_SupaBase as GetUser };