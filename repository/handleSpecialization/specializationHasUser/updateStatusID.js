class UpdateStatusID {
  async updateStatusID() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpdateStatusID_SupaBase extends UpdateStatusID {
  async updateStatusID(dataBase, userID, specializationHasUserID, statusID) {
    const { error } = await dataBase.from('specializationHasUser')
      .update({
        statusID,
      })
      .eq('userID', userID)
      .eq('specializationHasUserID', specializationHasUserID);
    if (error) { throw error; }
  }
}

export { UpdateStatusID_SupaBase as UpdateStatusID };
