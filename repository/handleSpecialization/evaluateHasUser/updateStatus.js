class UpdateStatus {
  async updateStatus() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpdateStatus_SupaBase extends UpdateStatus {
  async updateStatus(dataBase, evaluateID, roleHasUserFirstID, roleHasUserSecondID, statusID) {
    const { error } = await dataBase.from('evaluateHasUser')
      .update({
        statusID,
      })
      .eq('evaluateID', evaluateID)
      .or(`roleHasUserFirstID.eq.${roleHasUserFirstID}`, `roleHasUserSecondID.eq.${roleHasUserSecondID}`);
    if (error) { throw error; }
  }
}

export { UpdateStatus_SupaBase as UpdateStatus };
