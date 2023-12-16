class DeleteSpecializationHasUser {
  async deleteSpecializationHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class DeleteSpecializationHasUser_SupaBase extends DeleteSpecializationHasUser {
  async deleteSpecializationHasUser(dataBase, specializationHasUserIDs, userID) {
    const { error } = await dataBase.from('specializationHasUser')
      .delete()
      .in('specializationHasUserID', specializationHasUserIDs)
      .eq('userID', userID);
    if (error) {
      throw error;
    }
  }
}

export { DeleteSpecializationHasUser_SupaBase as DeleteSpecializationHasUser };
