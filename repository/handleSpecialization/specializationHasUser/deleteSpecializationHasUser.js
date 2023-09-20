class DeleteSpecializationHasUser {
  async deleteSpecializationHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class DeleteSpecializationHasUser_SupaBase extends DeleteSpecializationHasUser {
  async deleteSpecializationHasUser(dataBase, specializationHasUserID) {
    const { error } = await dataBase.from('specializationHasUser')
      .delete()
      .eq('specializationHasUserID', specializationHasUserID);
    if (error) { throw error; }
  }
}

export { DeleteSpecializationHasUser_SupaBase as DeleteSpecializationHasUser };
