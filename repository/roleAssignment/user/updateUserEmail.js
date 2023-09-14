class UpdateUserPassword {
  async updateUserPassword() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpdateUserPassword_SupaBase extends UpdateUserPassword {
  async updateUserPassword(dataBase, id, email) {
    const { error } = await dataBase.from('user')
      .update({
        email,
      })
      .eq('id', id);
    if (error) { throw error; }
  }
}

export { UpdateUserPassword_SupaBase as UpdateUserPassword };
