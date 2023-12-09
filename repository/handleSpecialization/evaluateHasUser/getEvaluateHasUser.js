class GetEvaluateHasUser {
  async getEvaluateHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class GetEvaluateHasUser_SupaBase extends GetEvaluateHasUser {
  async getEvaluateHasUser(dataBase, roleHasUserID, specializationHasUserID) {
    const { data, error } = await dataBase.from('evaluateHasUser')
      .select()
      .eq('roleHasUserID', roleHasUserID)
      .eq('specializationHasUserID', specializationHasUserID)
      .maybeSingle();
    if (error) { throw error; }
    return data;
  }
}

export { GetEvaluateHasUser_SupaBase as GetEvaluateHasUser };
