class UpdateEmail {
  async updateEmail() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpdateEmail_SupaBase extends UpdateEmail {
  async updateEmail(dataBase, id, email) {
    const { error } = await dataBase.auth.admin.updateUserById(
      id,
      { email },
    );
    if (error) { throw error; }
  }
}

export { UpdateEmail_SupaBase as UpdateEmail };
