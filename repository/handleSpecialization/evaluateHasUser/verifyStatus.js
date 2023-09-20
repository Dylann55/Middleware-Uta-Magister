class VerifyStatus {
  async verifyStatus() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class VerifyStatus_SupaBase extends VerifyStatus {
  async verifyStatus(dataBase, evaluateID, statusID, roleHasUserID) {
    const { data, error } = await dataBase.from('evaluation')
      .select()
      .eq('evaluateID', evaluateID)
      .eq('statusID', statusID)
      .eq('roleHasUserID', roleHasUserID)
      .maybeSingle();
    if (error) { throw error; }
    return data;
  }
}

export { VerifyStatus_SupaBase as VerifyStatus };
