class CreateSpecializationHasUser {
  async createSpecializationHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateSpecializationHasUser_SupaBase extends CreateSpecializationHasUser {
  async createSpecializationHasUser(dataBase, roleHasUserID, specializationID) {
    const { data, error } = await dataBase.from('specializationHasUser').insert({
      roleHasUserID, specializationID,
    }).select()
      .maybeSingle();
    if (error) { throw error; }
    return data;
  }
}

export { CreateSpecializationHasUser_SupaBase as CreateSpecializationHasUser };
