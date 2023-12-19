class ApprovalSpecialization {
  async approvalSpecialization() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class ApprovalSpecialization_SupaBase extends ApprovalSpecialization {
  async approvalSpecialization(dataBase, userID, specializationHasUserID, statusID, completionSemester) {
    const { error } = await dataBase.from('specializationHasUser')
      .update({
        statusID, completionSemester,
      })
      .eq('userID', userID)
      .eq('specializationHasUserID', specializationHasUserID);
    if (error) { throw error; }
  }
}

export { ApprovalSpecialization_SupaBase as ApprovalSpecialization };
