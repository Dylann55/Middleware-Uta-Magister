class DeleteBodyAcademic {
  async deleteBodyAcademic() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class DeleteBodyAcademic_SupaBase extends DeleteBodyAcademic {
  async deleteBodyAcademic(dataBase, bodyAcademicIDs) {
    const { error } = await dataBase.from('bodyAcademic')
      .delete()
      .in('bodyAcademicID', bodyAcademicIDs);
    if (error) {
      throw error;
    }
  }
}

export { DeleteBodyAcademic_SupaBase as DeleteBodyAcademic };
