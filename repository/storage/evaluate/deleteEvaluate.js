class DeleteEvaluate {
  async deleteEvaluate() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class DeleteEvaluate_SupaBase extends DeleteEvaluate {
  async deleteEvaluate(dataBase, evaluateID) {
    const { error } = await dataBase.from('evaluate')
      .delete()
      .eq('evaluateID', evaluateID);
    if (error) { throw error; }
  }
}

export { DeleteEvaluate_SupaBase as DeleteEvaluate };
