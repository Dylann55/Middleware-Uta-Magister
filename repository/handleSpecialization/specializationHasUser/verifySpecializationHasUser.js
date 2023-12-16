class VerifySpecializationHasUser {
  async verifySpecializationHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class VerifySpecializationHasUser_SupaBase extends VerifySpecializationHasUser {
  async verifySpecializationHasUser(dataBase, userID, specializationHasUserID) {
    const { data, error } = await dataBase.from('specializationHasUser')
      .select()
      .eq('userID', userID)
      .eq('specializationHasUserID', specializationHasUserID)
      .maybeSingle();
    if (error) { throw error; }
    return data;
  }
}

export { VerifySpecializationHasUser_SupaBase as VerifySpecializationHasUser };
