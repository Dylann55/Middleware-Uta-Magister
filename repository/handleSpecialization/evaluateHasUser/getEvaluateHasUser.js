class GetEvaluateHasUser {
  async getEvaluateHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class GetEvaluateHasUser_SupaBase extends GetEvaluateHasUser {
  async getEvaluateHasUser(dataBase, userID, specializationHasUserID) {
    const { data, error } = await dataBase.from('evaluateHasUser')
      .select()
      .eq('userID', userID)
      .eq('specializationHasUserID', specializationHasUserID);
    if (error) { throw error; }
    return data;
  }
}

export { GetEvaluateHasUser_SupaBase as GetEvaluateHasUser };
