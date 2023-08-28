class SearchRole {
    constructor() {
        // Implementación predeterminada
    }

    async searchRole() {
        throw new Error("Sobreescribir para obtener la instancia de la Base de datos");
    }
}

class SeachRole_SupaBase extends SearchRole {
    constructor() {
        super();
    }

    async searchRole(dataBase, role, workerID) {
        const { data } = await dataBase.from('roleWorker')
            .select()
            .eq('roleID', role)
            .eq('workerID', workerID)
            .maybeSingle();
        return data;
    }
}

export { SeachRole_SupaBase as SearchRole };