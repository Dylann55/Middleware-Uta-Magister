class SelectRubric {
  async selectRubric() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectRubric_SupaBase extends SelectRubric {
  async selectRubric(dataBase, evaluateHasUserID, evaluateID) {
    const { data, error } = await dataBase.from('rubric')
      .select()
      .eq('evaluateID', evaluateID)
      .eq('evaluateHasUserID', evaluateHasUserID);
    if (error) {
      throw error;
    }
    return data;
  }
}

export { SelectRubric_SupaBase as SelectRubric };
