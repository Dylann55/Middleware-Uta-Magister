const updateUser = async (supabase, name, lastName, rut, userID) => {
    const { error } = await supabase.from('user')
        .update({ name, lastName, rut })
        .eq('id', userID);
    if (error) { throw error; }
}
export default updateUser;

class UpdateUser {
    constructor() {
        // Implementación predeterminada
    }

    async updateUser() {
        throw new Error("Sobreescribir para obtener la instancia de la Base de datos");
    }
}

class UpdateUser_SupaBase extends UpdateUser {
    constructor() {
        super();
    }

    async updateUser(dataBase, userID, rut, firstName, secondName, surnameM, surnameF, sex, stateCivil, birthday, address, email, phone) {
        const { error } = await dataBase.from('user')
            .update({ rut, firstName, secondName, surnameM, surnameF, sex, stateCivil, birthday, address, email, phone })
            .eq('userID', userID);
        if (error) { throw error; }
    }
}

export { UpdateUser_SupaBase as UpdateUser };


