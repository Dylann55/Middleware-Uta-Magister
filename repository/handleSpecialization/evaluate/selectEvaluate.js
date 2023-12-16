class SelectEvaluate {
  async selectUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectEvaluate_SupaBase extends SelectEvaluate {
  async selectEvaluate(dataBase, specializationHasSemesterID, stageID) {
    const { data, error } = await dataBase.from('evaluate')
      .select(`
      *,
      stage(*)
      `)
      .eq('specializationHasSemesterID', specializationHasSemesterID)
      .eq('stageID', stageID);
    if (error) { throw error; }
    return data;
  }
}

export { SelectEvaluate_SupaBase as SelectEvaluate };
