class CreateEvaluateHasUser {
  async createEvaluateHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateEvaluateHasUser_SupaBase extends CreateEvaluateHasUser {
  async createEvaluateHasUser(dataBase, dataArray) {
    const { error } = await dataBase.from('evaluateHasUser')
      .insert(dataArray);
    if (error) { throw error; }
  }
}

export { CreateEvaluateHasUser_SupaBase as CreateEvaluateHasUser };
