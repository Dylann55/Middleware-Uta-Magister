class VerifySpecializationHasStudent {
  async verifySpecializationHasStudent() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class VerifySpecializationHasStudent_SupaBase extends VerifySpecializationHasStudent {
  async verifySpecializationHasStudent(dataBase, userID, specializationHasUserID, specializationHasSemesterID) {
    const { data, error } = await dataBase.from('specializationEvaluationAcademics')
      .select()
      .eq('userID', userID)
      .eq('specializationHasUserID', specializationHasUserID)
      .eq('specializationHasSemesterID', specializationHasSemesterID)
      .maybeSingle();
    if (error) { throw error; }
    return data;
  }
}

export { VerifySpecializationHasStudent_SupaBase as VerifySpecializationHasStudent };
