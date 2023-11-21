class SelectSpecializationHasUser {
  async selectSpecializationHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectSpecializationHasUser_SupaBase extends SelectSpecializationHasUser {
  async selectSpecializationHasUser(dataBase, semesterID) {
    const { data, error } = await dataBase.from('specializationHasUser')
      .select()
      .eq('semesterID', semesterID);
    if (error) { throw error; }
    return data;
  }
}

export { SelectSpecializationHasUser_SupaBase as SelectSpecializationHasUser };
