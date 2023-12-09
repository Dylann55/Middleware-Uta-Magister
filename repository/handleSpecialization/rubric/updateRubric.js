class UpdateRubric {
  async updateRubric() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpdateRubric_SupaBase extends UpdateRubric {
  async updateRubric(dataBase, rubricID, description, rubricName, evaluateHasUserID) {
    const { error } = await dataBase.from('rubric')
      .update({
        description, rubricName,
      })
      .eq('evaluateHasUserID', evaluateHasUserID)
      .eq('rubricID', rubricID);
    if (error) { throw error; }
  }
}

export { UpdateRubric_SupaBase as UpdateRubric };
