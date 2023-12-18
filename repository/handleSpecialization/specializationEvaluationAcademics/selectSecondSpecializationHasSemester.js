class SelectSecondSpecializationHasSemester {
  async selectSecondSpecializationHasSemester() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectSecondSpecializationHasSemester_SupaBase extends SelectSecondSpecializationHasSemester {
  async selectSecondSpecializationHasSemester(dataBase, userID) {
    const { data, error } = await dataBase.from('preliminaryProjectEvaluation')
      .select()
      .or(`academicA_userID.eq.${userID} ,academicB_userID.eq.${userID}`);
    if (error) { throw error; }
    return data;
  }
}

export { SelectSecondSpecializationHasSemester_SupaBase as SelectSecondSpecializationHasSemester };
