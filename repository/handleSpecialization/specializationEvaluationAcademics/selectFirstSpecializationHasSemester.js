class SelectFirstSpecializationHasSemester {
  async selectFirstSpecializationHasSemester() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectFirstSpecializationHasSemester_SupaBase extends SelectFirstSpecializationHasSemester {
  async selectFirstSpecializationHasSemester(dataBase, userID) {
    const { data, error } = await dataBase.from('preliminaryProjectEvaluation')
      .select()
      .eq('guideAcademic_userID', userID);
    if (error) { throw error; }
    return data;
  }
}

export { SelectFirstSpecializationHasSemester_SupaBase as SelectFirstSpecializationHasSemester };
