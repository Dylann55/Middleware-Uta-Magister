class CreateUser {
  async createUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateUser_SupaBase extends CreateUser {
  async createUser(dataBase, id, rut, firstName, secondName, surnameM, surnameF, sex, stateCivil, birthday, address, email, phone, placeWork, phoneWork, job, entry) {
    const { data, error } = await dataBase.from('user').insert({
      rut, firstName, secondName, surnameM, surnameF, sex, stateCivil, birthday, address, email, phone, id, placeWork, phoneWork, job, entry,
    }).select()
      .maybeSingle();
    if (error) { throw error; }
    return data;
  }
}

export { CreateUser_SupaBase as CreateUser };
