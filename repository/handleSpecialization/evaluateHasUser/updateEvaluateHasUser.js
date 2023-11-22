class UpdateEvaluateHasUser {
  async updateEvaluateHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpdateEvaluateHasUser_SupaBase extends UpdateEvaluateHasUser {
  async updateEvaluateHasUser(dataBase, dataArray) {
    const { error } = await dataBase.from('evaluateHasUser')
      .upsert(dataArray);
    if (error) { throw error; }
  }
}

export { UpdateEvaluateHasUser_SupaBase as UpdateEvaluateHasUser };
