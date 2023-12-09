class DeleteRubric {
  async deleteRubric() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class DeleteRubric_SupaBase extends DeleteRubric {
  async deleteRubric(dataBase, rubricIDs, evaluateHasUserID) {
    const { error } = await dataBase.from('rubric')
      .delete()
      .eq('evaluateHasUserID', evaluateHasUserID)
      .in('rubricID', rubricIDs);
    if (error) { throw error; }
  }
}

export { DeleteRubric_SupaBase as DeleteRubric };
