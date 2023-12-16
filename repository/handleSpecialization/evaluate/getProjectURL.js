class GetProjectURL {
  async getProjectURL() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class GetProjectURL_SupaBase extends GetProjectURL {
  async getProjectURL(dataBase, evaluateID, specializationHasSemesterID) {
    const { data, error } = await dataBase.from('evaluate')
      .select()
      .eq('evaluateID', evaluateID)
      .eq('specializationHasSemesterID', specializationHasSemesterID)
      .maybeSingle();
    if (error) { throw error; }
    return data.projectURL;
  }
}

export { GetProjectURL_SupaBase as GetProjectURL };
