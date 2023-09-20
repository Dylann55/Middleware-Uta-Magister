class UpdateUser {
  async updateUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpdateUser_SupaBase extends UpdateUser {
  async updateUser(dataBase, userID, rut, firstName, secondName, surnameM, surnameF, sex, stateCivil, birthday, address, phone) {
    const { error } = await dataBase.from('user')
      .update({
        rut, firstName, secondName, surnameM, surnameF, sex, stateCivil, birthday, address, phone,
      })
      .eq('userID', userID);
    if (error) { throw error; }
  }
}

export { UpdateUser_SupaBase as UpdateUser };
