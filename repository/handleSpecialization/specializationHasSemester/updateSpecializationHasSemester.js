class UpdateSpecializationHasSemester {
  async updateSpecializationHasSemester() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpdateSpecializationHasSemester_SupaBase extends UpdateSpecializationHasSemester {
  async updateSpecializationHasSemester(dataBase, specializationHasSemesterID, typeEvaluateID, specializationHasUserID) {
    const { error } = await dataBase.from('specializationHasSemester')
      .update({
        typeEvaluateID,
      })
      .eq('specializationHasUserID', specializationHasUserID)
      .eq('specializationHasSemesterID', specializationHasSemesterID);
    if (error) { throw error; }
  }
}

export { UpdateSpecializationHasSemester_SupaBase as UpdateSpecializationHasSemester };
