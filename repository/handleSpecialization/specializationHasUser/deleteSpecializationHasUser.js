class DeleteSpecializationHasUser {
  async deleteSpecializationHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class DeleteSpecializationHasUser_SupaBase extends DeleteSpecializationHasUser {
  async deleteSpecializationHasUser(dataBase, specializationHasUserIDs, roleHasUserID) {
    const { error } = await dataBase.from('specializationHasUser')
      .delete()
      .eq('roleHasUserID', roleHasUserID)
      .in('specializationHasUserID', specializationHasUserIDs);
    if (error) { throw error; }
  }
}

export { DeleteSpecializationHasUser_SupaBase as DeleteSpecializationHasUser };
