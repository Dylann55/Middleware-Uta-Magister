class UpdateEvaluate {
  async updateEvaluate() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpdateEvaluate_SupaBase extends UpdateEvaluate {
  async updateEvaluate(dataBase, evaluateID, projectURL, formatID, updateDate) {
    const { error } = await dataBase.from('evaluate')
      .update({
        projectURL, formatID, updateDate,
      })
      .eq('evaluateID', evaluateID);
    if (error) { throw error; }
  }
}

export { UpdateEvaluate_SupaBase as UpdateEvaluate };
