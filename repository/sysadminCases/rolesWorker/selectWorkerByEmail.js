class SelectWorkerByEmail {
    constructor() {
        // Implementación predeterminada
    }

    async selectWorkerByEmail() {
        throw new Error("Sobreescribir para obtener la instancia de la Base de datos");
    }
}

class SelectWorkerByEmail_SupaBase extends SelectWorkerByEmail {
    constructor() {
        super();
    }

    async selectWorkerByEmail(dataBase, email) {
        const { data, error } = await dataBase.from('worker')
            .select()
            .eq('email', email)
            .maybeSingle();
        if (error) { throw error; }
        return data;
    }
}

export { SelectWorkerByEmail_SupaBase as SelectWorkerByEmail };