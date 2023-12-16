class CreateSpecializationHasUser {
  async createSpecializationHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateSpecializationHasUser_SupaBase extends CreateSpecializationHasUser {
  async createSpecializationHasUser(dataBase, userID, specializationID, entrySemester) {
    const { error } = await dataBase.from('specializationHasUser').insert({
      userID, specializationID, entrySemester,
    });
    if (error) { throw error; }
  }
}

export { CreateSpecializationHasUser_SupaBase as CreateSpecializationHasUser };
