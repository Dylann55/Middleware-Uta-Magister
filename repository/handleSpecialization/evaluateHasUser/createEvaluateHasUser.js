class CreateEvaluateHasUser {
  async createEvaluateHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateEvaluateHasUser_SupaBase extends CreateEvaluateHasUser {
  async createEvaluateHasUser(dataBase, evaluateID, statusID) {
    const { error } = await dataBase.from('evaluateHasUser').insert({
      evaluateID, statusID,
    }).select()
      .maybeSingle();
    if (error) { throw error; }
  }
}

export { CreateEvaluateHasUser_SupaBase as CreateEvaluateHasUser };
