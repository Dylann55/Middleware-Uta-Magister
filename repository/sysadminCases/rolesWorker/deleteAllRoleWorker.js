class DeleteAllRoleWorker {
  async deleteAllRoleWorker() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class DeleteAllRoleWorker_SupaBase extends DeleteAllRoleWorker {
  async deleteAllRoleWorker(dataBase, userID) {
    const { error } = await dataBase.auth.admin.deleteUser(
      userID,
    );
    if (error) { throw error; }
  }
}

export { DeleteAllRoleWorker_SupaBase as DeleteAllRoleWorker };
