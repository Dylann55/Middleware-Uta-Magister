class DeleteUser {
  async deleteUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class DeleteUser_SupaBase extends DeleteUser {
  async deleteUser(dataBase, userID) {
    const { error } = await dataBase.from('user')
      .delete()
      .eq('userID', userID);
    if (error) { throw error; }
  }
}

export { DeleteUser_SupaBase as DeleteUser };
