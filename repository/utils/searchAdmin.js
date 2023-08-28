class SearchAdmin {
    constructor() {
        // Implementación predeterminada
    }

    async searchAdmin() {
        throw new Error("Sobreescribir para obtener la instancia de la Base de datos");
    }
}

class SeachAdmin_SupaBase extends SearchAdmin {
    constructor() {
        super();
    }

    async searchAdmin(dataBase, profiles, workerID) {
        const { data,error } = await dataBase.from('roleWorker')
            .select()
            .eq('roleID', profiles.Administrador)
            .eq('workerID', workerID)
            .maybeSingle();
        return data;
    }
}

export { SeachAdmin_SupaBase as SearchAdmin };