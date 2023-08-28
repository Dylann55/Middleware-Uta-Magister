class CreateUser {
  constructor() {
    // Implementación predeterminada
  }

  async createUser() {
    throw new Error("Sobreescribir para obtener la instancia de la Base de datos");
  }
}

class CreateUser_SupaBase extends CreateUser {
  constructor() {
    super();
  }

  async createUser(dataBase, rut, firstName, secondName, surnameM, surnameF, sex, stateCivil, birthday, address, email, phone) {
    const { data, error } = await dataBase.from('user').insert({ rut, firstName, secondName, surnameM, surnameF, sex, stateCivil, birthday, address, email, phone });
    if (error) { throw error; }
    return data;
  }
}

export { CreateUser_SupaBase as CreateUser };
