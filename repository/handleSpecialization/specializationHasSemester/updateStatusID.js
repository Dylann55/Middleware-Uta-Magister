class UpdateStatusID {
  async updateStatusID() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpdateStatusID_SupaBase extends UpdateStatusID {
  async updateStatusID(dataBase, specializationHasSemesterID, statusID) {
    const { error } = await dataBase.from('specializationHasSemester')
      .update({
        statusID,
      })
      .eq('specializationHasSemesterID', specializationHasSemesterID);
    if (error) { throw error; }
  }
}

export { UpdateStatusID_SupaBase as UpdateStatusID };
