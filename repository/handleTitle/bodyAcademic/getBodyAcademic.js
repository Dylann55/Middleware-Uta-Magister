class GetBodyAcademic {
  async getBodyAcademic() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class GetBodyAcademic_SupaBase extends GetBodyAcademic {
  async getBodyAcademic(dataBase, bodyAcademicIDs) {
    const { data, error } = await dataBase.from('bodyAcademic')
      .select()
      .in('bodyAcademicID', bodyAcademicIDs);
    if (error) { throw error; }
    return data;
  }
}

export { GetBodyAcademic_SupaBase as GetBodyAcademic };
