class SelectRolesWorker {
    constructor() {
        // Implementación predeterminada
    }

    async selectRolesWorker() {
        throw new Error("Sobreescribir para obtener la instancia de la Base de datos");
    }
}

class SelectRolesWorker_SupaBase extends SelectRolesWorker {
    constructor() {
        super();
    }

    async selectRolesWorker(dataBase) {
        const { data, error } = await dataBase.from('rolesworker')
            .select();
        if (error) { throw error; }
        return data;
    }
}

export { SelectRolesWorker_SupaBase as SelectRolesWorker };