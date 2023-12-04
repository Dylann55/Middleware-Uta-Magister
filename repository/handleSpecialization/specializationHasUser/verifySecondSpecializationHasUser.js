class VerifySecondSpecializationHasUser {
  async verifySecondSpecializationHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class VerifySecondSpecializationHasUser_SupaBase extends VerifySecondSpecializationHasUser {
  async verifySecondSpecializationHasUser(dataBase, roleHasUserID, specializationHasUserID) {
    const { data, error } = await dataBase.from('specializationEvaluationAcademics')
      .select()
      .or('academic2_roleHasUserID', roleHasUserID)
      .or('academic3_roleHasUserID', roleHasUserID)
      .eq('specializationHasUserID', specializationHasUserID)
      .maybeSingle();
    if (error) { throw error; }
    return data;
  }
}

export { VerifySecondSpecializationHasUser_SupaBase as VerifySecondSpecializationHasUser };
