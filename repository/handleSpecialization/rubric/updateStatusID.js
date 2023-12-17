class UpdateStatusID {
  async updateStatusID() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpdateStatusID_SupaBase extends UpdateStatusID {
  async updateStatusID(dataBase, rubricID, statusID) {
    const { error } = await dataBase.from('rubric')
      .update({
        statusID,
      })
      .eq('rubricID', rubricID);
    if (error) { throw error; }
  }
}

export { UpdateStatusID_SupaBase as UpdateStatusID };
