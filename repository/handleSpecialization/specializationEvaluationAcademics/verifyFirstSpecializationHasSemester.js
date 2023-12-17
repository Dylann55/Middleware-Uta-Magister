class VerifyFirstSpecializationHasSemester {
  async verifyFirstSpecializationHasSemester() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class VerifyFirstSpecializationHasSemester_SupaBase extends VerifyFirstSpecializationHasSemester {
  async verifyFirstSpecializationHasSemester(dataBase, userID, specializationHasSemesterID) {
    const { data, error } = await dataBase.from('specializationEvaluationAcademics')
      .select()
      .eq('guideAcademic_userID', userID)
      .eq('specializationHasSemesterID', specializationHasSemesterID)
      .maybeSingle();
    if (error) { throw error; }
    return data;
  }
}

export { VerifyFirstSpecializationHasSemester_SupaBase as VerifyFirstSpecializationHasSemester };
