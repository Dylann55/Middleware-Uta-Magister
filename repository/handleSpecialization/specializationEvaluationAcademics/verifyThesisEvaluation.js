class VerifyThesisEvaluation {
  async verifyThesisEvaluation() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class VerifyThesisEvaluation_SupaBase extends VerifyThesisEvaluation {
  async verifyThesisEvaluation(dataBase, userID, specializationHasSemesterID) {
    const { data, error } = await dataBase.from('thesisEvaluation')
      .select()
      .or(`director_userID.eq.${userID} ,codirector_userID.eq.${userID}`)
      .eq('specializationHasSemesterID', specializationHasSemesterID)
      .maybeSingle();
    if (error) { throw error; }
    return data;
  }
}

export { VerifyThesisEvaluation_SupaBase as VerifyThesisEvaluation };
