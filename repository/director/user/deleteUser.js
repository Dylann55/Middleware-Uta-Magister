class DeleteUser {
  async deleteUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class DeleteUser_SupaBase extends DeleteUser {
  async deleteUser(dataBase, userID) {
    const { error } = await dataBase.auth.admin.deleteUser(
      userID,
    );
    if (error) { throw error; }
  }
}

export { DeleteUser_SupaBase as DeleteUser };
