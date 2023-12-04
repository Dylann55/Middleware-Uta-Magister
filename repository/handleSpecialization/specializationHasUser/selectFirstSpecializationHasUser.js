class SelectFirstSpecializationHasUser {
  async selectFirstSpecializationHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectFirstSpecializationHasUser_SupaBase extends SelectFirstSpecializationHasUser {
  async selectFirstSpecializationHasUser(dataBase, roleHasUserID) {
    const { data, error } = await dataBase.from('specializationEvaluationAcademics')
      .select()
      .eq('academic1_roleHasUserID', roleHasUserID);
    if (error) { throw error; }
    return data;
  }
}

export { SelectFirstSpecializationHasUser_SupaBase as SelectFirstSpecializationHasUser };
