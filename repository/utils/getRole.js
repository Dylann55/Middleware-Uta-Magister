class GetRole {
    constructor() {
        // Implementación predeterminada
    }

    async getRole() {
        throw new Error("Sobreescribir para obtener la instancia de la Base de datos");
    }
}

class GetRol_SupaBase extends GetRole {
    constructor() {
        super();
    }

    async getRole(dataBase) {
        const { data, error } = await dataBase.from('role')
            .select();
        if (error) { throw error; }
        const profiles = {};
        data.forEach(profile => {
            profiles[profile.name] = profile.roleID;
        });
        return profiles;
    }
}

export { GetRol_SupaBase as GetRole };