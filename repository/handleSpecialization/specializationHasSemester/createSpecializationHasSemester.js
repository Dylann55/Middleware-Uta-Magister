class CreateSpecializationHasSemester {
  async createSpecializationHasSemester() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateSpecializationHasSemester_SupaBase extends CreateSpecializationHasSemester {
  async createSpecializationHasSemester(dataBase, specializationHasUserID, semesterID, typeEvaluateID) {
    const { error } = await dataBase.from('specializationHasSemester').insert({
      specializationHasUserID, semesterID, typeEvaluateID,
    });
    if (error) { throw error; }
  }
}

export { CreateSpecializationHasSemester_SupaBase as CreateSpecializationHasSemester };
