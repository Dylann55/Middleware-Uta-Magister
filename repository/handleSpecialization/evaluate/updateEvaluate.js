class UpdateEvaluate {
  async updateEvaluate() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpdateEvaluate_SupaBase extends UpdateEvaluate {
  async updateEvaluate(dataBase, evaluateID, beforeProyect, formatID, updateDate) {
    const { error } = await dataBase.from('evaluate')
      .update({
        beforeProyect, formatID, updateDate,
      })
      .eq('evaluateID', evaluateID);
    if (error) { throw error; }
  }
}

export { UpdateEvaluate_SupaBase as UpdateEvaluate };
