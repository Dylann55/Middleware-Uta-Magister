class UpdateBodyAcademic {
  async updateBodyAcademic() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpdateBodyAcademic_SupaBase extends UpdateBodyAcademic {
  async updateBodyAcademic(dataBase, bodyAcademicID, investigationLine, typeBond, titleID, titleYear) {
    const { error } = await dataBase.from('bodyAcademic')
      .update({
        investigationLine, typeBond, titleID, titleYear,
      })
      .eq('bodyAcademicID', bodyAcademicID);
    if (error) { throw error; }
  }
}

export { UpdateBodyAcademic_SupaBase as UpdateBodyAcademic };
