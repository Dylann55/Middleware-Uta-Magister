class UpdatePassword {
  async updatePassword() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpdatePassword_SupaBase extends UpdatePassword {
  async updatePassword(dataBase, id, password) {
    const { error } = await dataBase.auth.admin.updateUserById(
      id,
      { password },
    );
    if (error) { throw error; }
  }
}

export { UpdatePassword_SupaBase as UpdatePassword };
