class GetSpecializationHasUser {
  async getSpecializationHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class GetSpecializationHasUser_SupaBase extends GetSpecializationHasUser {
  async getSpecializationHasUser(dataBase, roleHasUserID) {
    const { data, error } = await dataBase.from('specializationEvaluationAcademics')
      .select()
      .eq('roleHasUserID', roleHasUserID);
    if (error) { throw error; }
    return data;
  }
}

export { GetSpecializationHasUser_SupaBase as GetSpecializationHasUser };
