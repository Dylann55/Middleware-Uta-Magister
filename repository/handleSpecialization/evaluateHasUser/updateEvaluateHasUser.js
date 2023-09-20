class UpdateEvaluateHasUser {
  async updateEvaluateHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpdateEvaluateHasUser_SupaBase extends UpdateEvaluateHasUser {
  async updateEvaluateHasUser(dataBase, evaluateID, roleHasUserFirstID, roleHasUserSecondID, statusID) {
    const { error } = await dataBase.from('evaluateHasUser')
      .update({
        roleHasUserFirstID, roleHasUserSecondID, statusID,
      })
      .eq('evaluateID', evaluateID);
    if (error) { throw error; }
  }
}

export { UpdateEvaluateHasUser_SupaBase as UpdateEvaluateHasUser };
