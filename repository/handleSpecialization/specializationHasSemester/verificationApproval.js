class VerificationApproval {
  async verificationApproval() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class VerificationApproval_SupaBase extends VerificationApproval {
  async verificationApproval(dataBase, typeEvaluateID, specializationHasUserID, statusID) {
    const { data, error } = await dataBase.from('specializationHasSemester')
      .select()
      .eq('typeEvaluateID', typeEvaluateID)
      .eq('specializationHasUserID', specializationHasUserID)
      .eq('statusID', statusID)
      .maybeSingle();
    if (error) { throw error; }
    return data;
  }
}

export { VerificationApproval_SupaBase as VerificationApproval };
