class VerifyFirstSpecializationHasUser {
  async verifyFirstSpecializationHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class VerifyFirstSpecializationHasUser_SupaBase extends VerifyFirstSpecializationHasUser {
  async verifyFirstSpecializationHasUser(dataBase, roleHasUserID, specializationHasUserID) {
    const { data, error } = await dataBase.from('specializationEvaluationAcademics')
      .select()
      .eq('academic1_roleHasUserID', roleHasUserID)
      .eq('specializationHasUserID', specializationHasUserID)
      .maybeSingle();
    if (error) { throw error; }
    return data;
  }
}

export { VerifyFirstSpecializationHasUser_SupaBase as VerifyFirstSpecializationHasUser };
