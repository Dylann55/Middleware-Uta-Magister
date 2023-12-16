class VerifyStatus {
  async verifyStatus() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class VerifyStatus_SupaBase extends VerifyStatus {
  async verifyStatus(dataBase, userID, specializationHasUserID, statusID) {
    const { data, error } = await dataBase.from('specializationHasUser')
      .select()
      .eq('statusID', statusID)
      .eq('userID', userID)
      .eq('specializationHasUserID', specializationHasUserID);
    if (error) { throw error; }
    return data;
  }
}

export { VerifyStatus_SupaBase as VerifyStatus };
