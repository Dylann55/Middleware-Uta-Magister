class SelectSecondSpecializationHasUser {
  async selectSecondSpecializationHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectSecondSpecializationHasUser_SupaBase extends SelectSecondSpecializationHasUser {
  async selectSecondSpecializationHasUser(dataBase, roleHasUserID) {
    const { data, error } = await dataBase.from('specializationEvaluationAcademics')
      .select()
      .or('academic2_roleHasUserID').eq(roleHasUserID)
      .or('academic3_roleHasUserID')
      .eq(roleHasUserID);
    if (error) { throw error; }
    return data;
  }
}

export { SelectSecondSpecializationHasUser_SupaBase as SelectSecondSpecializationHasUser };
