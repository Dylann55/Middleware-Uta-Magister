class DeleteEvaluateHasUser {
  async deleteEvaluateHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class DeleteEvaluateHasUser_SupaBase extends DeleteEvaluateHasUser {
  async deleteEvaluateHasUser(dataBase, evaluateID) {
    const { error } = await dataBase.from('evaluateHasUser')
      .delete()
      .eq('evaluateID', evaluateID);
    if (error) { throw error; }
  }
}

export { DeleteEvaluateHasUser_SupaBase as DeleteEvaluateHasUser };
