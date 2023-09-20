class SelectEvaluation {
  async selectEvaluation() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectEvaluation_SupaBase extends SelectEvaluation {
  async selectEvaluation(dataBase, roleHasUserID) {
    let query = dataBase.from('evaluation').select();

    if (roleHasUserID) {
      query = query.eq('roleHasUserID', roleHasUserID);
    }

    const { data, error } = await query;
    if (error) {
      throw error;
    }

    return data;
  }
}

export { SelectEvaluation_SupaBase as SelectEvaluation };
