class DeleteRoleWorker {
    constructor() {
        // Implementación predeterminada
    }

    async deleteRoleWorker() {
        throw new Error("Sobreescribir para obtener la instancia de la Base de datos");
    }
}

class DeleteRoleWorker_SupaBase extends DeleteRoleWorker {
    constructor() {
        super();
    }

    async deleteRoleWorker(dataBase, workerID, roleID) {
        const { error } = await dataBase.from('roleWorker')
            .delete()
            .eq('workerID', workerID)
            .eq('roleID', roleID);
        if (error) { throw error; }
    }
}

export { DeleteRoleWorker_SupaBase as DeleteRoleWorker };