class SelectSpecializationHasUser {
  async selectSpecializationHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectSpecializationHasUser_SupaBase extends SelectSpecializationHasUser {
  async selectSpecializationHasUser(dataBase) {
    const { data, error } = await dataBase.from('specializationEvaluationAcademics')
      .select();
    if (error) { throw error; }
    return data;
  }
}

export { SelectSpecializationHasUser_SupaBase as SelectSpecializationHasUser };
