class SelectThesisEvaluation {
  async selectThesisEvaluation() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectThesisEvaluation_SupaBase extends SelectThesisEvaluation {
  async selectThesisEvaluation(dataBase, userID) {
    const { data, error } = await dataBase.from('thesisEvaluation')
      .select()
      .or(`director_userID.eq.${userID} ,codirector_userID.eq.${userID}`);
    if (error) { throw error; }
    return data;
  }
}

export { SelectThesisEvaluation_SupaBase as SelectThesisEvaluation };
