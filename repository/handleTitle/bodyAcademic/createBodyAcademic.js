class CreateBodyAcademic {
  async createBodyAcademic() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateBodyAcademic_SupaBase extends CreateBodyAcademic {
  async createBodyAcademic(dataBase, documentTitle, userID, formatID, titleID, titleYear, investigationLine, typeBond) {
    const { error } = await dataBase.from('bodyAcademic').insert({
      documentTitle, userID, formatID, titleID, titleYear, investigationLine, typeBond,
    });
    if (error) { throw error; }
  }
}

export { CreateBodyAcademic_SupaBase as CreateBodyAcademic };
