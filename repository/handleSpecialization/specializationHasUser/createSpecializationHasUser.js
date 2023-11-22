class CreateSpecializationHasUser {
  async createSpecializationHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateSpecializationHasUser_SupaBase extends CreateSpecializationHasUser {
  async createSpecializationHasUser(dataBase, roleHasUserID, specializationID, semesterID) {
    const { error } = await dataBase.from('specializationHasUser').insert({
      roleHasUserID, specializationID, semesterID,
    });
    if (error) { throw error; }
  }
}

export { CreateSpecializationHasUser_SupaBase as CreateSpecializationHasUser };
