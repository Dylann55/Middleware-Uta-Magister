class UpdateSpecializationHasUser {
  async updateSpecializationHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpdateSpecializationHasUser_SupaBase extends UpdateSpecializationHasUser {
  async updateSpecializationHasUser(dataBase, specializationHasUserID, specializationID, entrySemester, userID) {
    const { error } = await dataBase.from('specializationHasUser')
      .update({
        specializationID,
        entrySemester,
      })
      .eq('userID', userID)
      .eq('specializationHasUserID', specializationHasUserID);
    if (error) { throw error; }
  }
}

export { UpdateSpecializationHasUser_SupaBase as UpdateSpecializationHasUser };
