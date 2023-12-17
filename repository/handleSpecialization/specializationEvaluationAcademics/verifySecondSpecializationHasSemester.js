class VerifySecondSpecializationHasSemester {
  async verifySecondSpecializationHasSemester() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class VerifySecondSpecializationHasSemester_SupaBase extends VerifySecondSpecializationHasSemester {
  async verifySecondSpecializationHasSemester(dataBase, userID, specializationHasSemesterID) {
    const { data, error } = await dataBase.from('specializationEvaluationAcademics')
      .select()
      .or(`academicA_userID.eq.${userID} ,academicB_userID.eq.${userID}`)
      .eq('specializationHasSemesterID', specializationHasSemesterID)
      .maybeSingle();
    if (error) { throw error; }
    return data;
  }
}

export { VerifySecondSpecializationHasSemester_SupaBase as VerifySecondSpecializationHasSemester };
