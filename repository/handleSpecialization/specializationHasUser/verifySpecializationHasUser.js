class VerifySpecializationHasUser {
  async verifySpecializationHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class VerifySpecializationHasUser_SupaBase extends VerifySpecializationHasUser {
  async verifySpecializationHasUser(dataBase, roleHasUserID, specializationHasUserID) {
    const { data, error } = await dataBase.from('specializationEvaluationAcademics')
      .select()
      .eq('roleHasUserID', roleHasUserID)
      .eq('specializationHasUserID', specializationHasUserID)
      .maybeSingle();
    if (error) { throw error; }
    return data;
  }
}

export { VerifySpecializationHasUser_SupaBase as VerifySpecializationHasUser };
